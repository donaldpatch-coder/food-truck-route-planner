const jsonHeaders = {
  "Content-Type": "application/json"
};

function response(statusCode, body) {
  return {
    statusCode,
    headers: jsonHeaders,
    body: JSON.stringify(body)
  };
}

function buildChannelPosts(posts = {}, channels = []) {
  return channels.map((channel) => ({
    channel,
    text: posts[channel] || posts.gmb || posts.facebook || posts.instagram || ""
  })).filter((item) => item.text.trim());
}

async function sendWebhook(payload, channelPosts) {
  if (!payload.webhookUrl) {
    return response(400, {
      ok: false,
      message: "Webhook URL is missing. Add it in Settings, or switch back to Demo mode."
    });
  }

  const webhookResponse = await fetch(payload.webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      source: "Food Truck AI",
      channelPosts,
      location: payload.location,
      photoName: payload.photoName || ""
    })
  });

  if (!webhookResponse.ok) {
    return response(502, {
      ok: false,
      message: "The webhook did not accept the broadcast. Check the webhook URL."
    });
  }

  return response(200, {
    ok: true,
    message: "Broadcast sent to the webhook."
  });
}

async function sendAyrshare(channelPosts) {
  const apiKey = process.env.AYRSHARE_API_KEY;

  if (!apiKey) {
    return response(501, {
      ok: false,
      message: "Ayrshare is selected, but AYRSHARE_API_KEY is not added in Netlify yet."
    });
  }

  const results = [];

  for (const item of channelPosts) {
    const ayrshareResponse = await fetch("https://app.ayrshare.com/api/post", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        post: item.text,
        platforms: [item.channel]
      })
    });

    const detail = await ayrshareResponse.json().catch(() => ({}));
    results.push({ channel: item.channel, ok: ayrshareResponse.ok, detail });

    if (!ayrshareResponse.ok) {
      return response(502, {
        ok: false,
        message: `Ayrshare could not post to ${item.channel}. Check connected social accounts.`,
        results
      });
    }
  }

  return response(200, {
    ok: true,
    message: "Broadcast sent through Ayrshare.",
    results
  });
}

async function sendBuffer() {
  return response(501, {
    ok: false,
    message: "Buffer needs profile IDs and a live access token before posting. Use Demo, Webhook, or Ayrshare for this test build."
  });
}

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return response(405, {
      ok: false,
      message: "Use POST to publish a broadcast."
    });
  }

  let payload = {};

  try {
    payload = JSON.parse(event.body || "{}");
  } catch (error) {
    return response(400, {
      ok: false,
      message: "The broadcast payload was not readable."
    });
  }

  const provider = payload.provider || "demo";
  const channels = Array.isArray(payload.channels) && payload.channels.length
    ? payload.channels
    : ["instagram", "facebook", "gmb"];
  const channelPosts = buildChannelPosts(payload.posts, channels);

  if (payload.test) {
    if (provider === "demo") {
      return response(200, { ok: true, message: "Demo mode is ready." });
    }

    if (provider === "ayrshare" && !process.env.AYRSHARE_API_KEY) {
      return response(501, {
        ok: false,
        message: "Add AYRSHARE_API_KEY in Netlify to enable Ayrshare."
      });
    }

    if (provider === "buffer") {
      return sendBuffer();
    }

    if (provider === "webhook" && !payload.webhookUrl) {
      return response(400, {
        ok: false,
        message: "Add a webhook URL to test the connection."
      });
    }

    return response(200, {
      ok: true,
      message: "Posting service settings look ready."
    });
  }

  if (!channelPosts.length) {
    return response(400, {
      ok: false,
      message: "No captions were included for posting."
    });
  }

  if (provider === "webhook") {
    return sendWebhook(payload, channelPosts);
  }

  if (provider === "ayrshare") {
    return sendAyrshare(channelPosts);
  }

  if (provider === "buffer") {
    return sendBuffer();
  }

  return response(200, {
    ok: true,
    message: "Demo broadcast saved. No live social service was called."
  });
};
