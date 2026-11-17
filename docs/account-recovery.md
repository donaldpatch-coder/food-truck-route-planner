# Account recovery

Forgot password and Lost account links are available on diner/business sign-in, creator sign-in and owner account screens. The shared /account-recovery page uses Supabase resetPasswordForEmail, recovery-code verification and updateUser after server-validated authentication. Recovery callback hashes on the homepage route to the recovery page before the directory auth client initializes. Callback fragments are removed after initialization. The reset request uses the canonical homepage as its redirect, retaining the established site URL rather than requiring an additional redirect entry.

Lost-account guidance covers forgotten email, inbox-provider recovery, existing-account ownership and legacy browser-local records. It does not disclose account existence, bypass email ownership or automatically transfer businesses. No new support inbox or manual account-recovery service is invented.

Validation: JS syntax, diff whitespace, mocked request/code/session gating/password mismatch/update flows and signed-out browser checks. No real user password was changed or recovery email sent during testing. End-to-end delivery and the configured hosted email redirect must still be verified by an account holder. Reference: https://supabase.com/docs/reference/javascript/auth-resetpasswordforemail
