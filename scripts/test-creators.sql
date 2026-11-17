begin;
insert into auth.users(id) values('11111111-1111-4111-8111-111111111111'),('22222222-2222-4222-8222-222222222222');
insert into public.streetbite_listings(user_id,source_key,name,kind,cuisine,zip,city,address,description,latitude,longitude)
values(null,'qa-creator-rollback','QA Creator Place rollback','Restaurant','QA','01852','Lowell, MA','QA public address','Transaction-only fixture that will be rolled back.',42.645,-71.31);
set local role authenticated;
select set_config('request.jwt.claims','{"sub":"11111111-1111-4111-8111-111111111111","role":"authenticated","is_anonymous":false}',true);
insert into public.streetbite_creator_profiles(handle,display_name,bio,is_public) values('qa_creator_rollback','QA Creator','Temporary profile, transaction rollback.',false);
insert into public.streetbite_reviews(listing_id,display_name,rating,body,dish_name,heat,richness,video_url,disclosure)
select id,'QA Creator',4,'A transaction-only first-hand dish review for access tests.','QA dish',0,5,'https://www.tiktok.com/@qa/video/123456789','complimentary'
from public.streetbite_listings where source_key='qa-creator-rollback';
set local role anon;
select set_config('request.jwt.claims','{}',true);
do $$ begin
 if exists(select 1 from public.streetbite_creator_profiles where handle='qa_creator_rollback') then raise exception 'private profile exposed';end if;
 if exists(select 1 from public.streetbite_creator_feed('qa_creator_rollback',12))then raise exception 'private profile in creator feed';end if;
 begin insert into public.streetbite_creator_profiles(handle,display_name)values('anon_creator','Anonymous');raise exception 'anonymous creator write allowed';exception when insufficient_privilege then null;end;
end $$;
set local role authenticated;
select set_config('request.jwt.claims','{"sub":"11111111-1111-4111-8111-111111111111","role":"authenticated","is_anonymous":false}',true);
update public.streetbite_creator_profiles set is_public=true where handle='qa_creator_rollback';
do $$ begin
 if (select count(*) from public.streetbite_creator_feed('qa_creator_rollback',12))<>1 then raise exception 'public creator feed missing';end if;
 begin update public.streetbite_reviews set heat=6 where display_name='QA Creator';raise exception 'out of range heat allowed';exception when check_violation then null;end;
 begin update public.streetbite_reviews set video_url='https://evil.example/reel/abc' where display_name='QA Creator';raise exception 'untrusted video host allowed';exception when check_violation then null;end;
end $$;
select set_config('request.jwt.claims','{"sub":"22222222-2222-4222-8222-222222222222","role":"authenticated","is_anonymous":false}',true);
do $$ declare n integer;begin
 update public.streetbite_creator_profiles set bio='Hijack' where handle='qa_creator_rollback';get diagnostics n=row_count;if n<>0 then raise exception 'cross-account profile edit';end if;
 update public.streetbite_reviews set body='Cross account review edit must be blocked.' where display_name='QA Creator';get diagnostics n=row_count;if n<>0 then raise exception 'cross-account review edit';end if;
 begin update public.streetbite_creator_profiles set user_id='22222222-2222-4222-8222-222222222222' where handle='qa_creator_rollback';raise exception 'ownership reassignment allowed';exception when insufficient_privilege then null;end;
end $$;
select set_config('request.jwt.claims','{"sub":"11111111-1111-4111-8111-111111111111","role":"authenticated","is_anonymous":false}',true);
update public.streetbite_reviews set is_public=false where display_name='QA Creator';
do $$ begin
 if exists(select 1 from public.streetbite_creator_feed('qa_creator_rollback',12))then raise exception 'hidden review in feed';end if;
 if exists(select 1 from public.streetbite_nearby(42.645,-71.31,5,'',false,'QA Creator Place') x where (x->>'review_count')::integer<>0)then raise exception 'hidden review counted in own search';end if;
end $$;
set local role anon;
select set_config('request.jwt.claims','{}',true);
do $$ begin if exists(select 1 from public.streetbite_reviews where display_name='QA Creator')then raise exception 'hidden review exposed to anonymous';end if;end $$;
reset role;
update public.streetbite_listings set status='hidden' where source_key='qa-creator-rollback';
set local role authenticated;
select set_config('request.jwt.claims','{"sub":"11111111-1111-4111-8111-111111111111","role":"authenticated","is_anonymous":false}',true);
do $$ begin if not exists(select 1 from public.streetbite_reviews where display_name='QA Creator')then raise exception 'author cannot manage review after business hidden';end if;end $$;
reset role;
rollback;
select 'PASS: creator profile privacy/public feed, scale/video constraints, anonymous/cross-account write denial, ownership protection, hidden reviews absent from feeds/ratings, author access after business hidden. Fixtures rolled back.' as result;
