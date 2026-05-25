<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Download Focused Broadcast MVP</title>
    <style>
      body {
        display: grid;
        place-items: center;
        min-height: 100vh;
        margin: 0;
        background: #f5f7fa;
        color: #1c2430;
        font-family: Arial, Helvetica, sans-serif;
      }

      main {
        display: grid;
        gap: 16px;
        width: min(560px, calc(100% - 32px));
        border: 1px solid #d8dee6;
        border-radius: 8px;
        background: #ffffff;
        box-shadow: 0 18px 45px rgba(28, 36, 48, 0.1);
        padding: 28px;
      }

      h1,
      p {
        margin: 0;
      }

      a,
      button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-height: 48px;
        border-radius: 8px;
        border: 1px solid #0e4c82;
        background: #1768ac;
        color: #ffffff;
        cursor: pointer;
        font: inherit;
        font-weight: 800;
        padding: 10px 16px;
        text-decoration: none;
      }

      code {
        overflow-wrap: anywhere;
        border-radius: 8px;
        background: #eef3f8;
        padding: 10px;
      }
    </style>
  </head>
  <body>
    <main>
      <h1>Download Dashboard Broadcast Fix</h1>
      <p>Use the button below to save the latest fixed zip file.</p>
      <a href="READY-TO-UPLOAD/focused-dashboard-broadcast-fix.zip" download="focused-dashboard-broadcast-fix.zip">Save zip file</a>
      <button type="button" id="download-button">Try browser download</button>
      <p>If the browser still will not save it, open this folder in Windows File Explorer:</p>
      <code>C:\Users\Teaching\Documents\Codex\2026-05-21\can-you-create-a-new-folder\truckroute\app</code>
    </main>

    <script>
      document.querySelector("#download-button").addEventListener("click", async () => {
        const response = await fetch("READY-TO-UPLOAD/focused-dashboard-broadcast-fix.zip");
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "focused-dashboard-broadcast-fix.zip";
        document.body.appendChild(link);
        link.click();
        link.remove();
        URL.revokeObjectURL(url);
      });
    </script>
  </body>
</html>
