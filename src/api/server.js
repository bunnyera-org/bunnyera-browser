import express from "express";
import profileRoutes from "./routes/profile.routes.js";
import proxyRoutes from "./routes/proxy.routes.js";
import sessionRoutes from "./routes/session.routes.js";
import fingerprintRoutes from "./routes/fingerprint.routes.js";

const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    service: "BunnyEra Browser API",
    version: "1.4"
  });
});

app.use("/api/profiles", profileRoutes);
app.use("/api/proxy", proxyRoutes);
app.use("/api/sessions", sessionRoutes);
app.use("/api/fingerprint", fingerprintRoutes);

app.listen(8080, () => {
  console.log("BunnyEra Browser API v1.4 running on port 8080");
});
