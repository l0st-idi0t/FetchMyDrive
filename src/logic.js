import { google } from "googleapis";

const authClient = (token) => {
  const client = new google.auth.OAuth2();
  client.setCredentials({ access_token: token });

  const drive = google.drive({ version: "v3", auth: client });

  // list files from the user's Google Drive
  drive.files.list(
    {
      pageSize: 10,
      fields: "nextPageToken, files(id, name)",
    },
    (err, res) => {
      if (err) {
        console.error("Error listing files:", err);
      } else {
        const files = res.data.files;
        if (files.length) {
          console.log("Files:");
          files.forEach((file) => {
            console.log(`${file.name} (${file.id})`);
          });
        } else {
          console.log("No files found.");
        }
      }
    }
  );
};

export default authClient;
