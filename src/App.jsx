function App() {
  const events = [
    ["Critical", "XSS", "api.payserv.net", "Blocked"],
    ["High", "SQL Injection", "payin.paynamics.net", "Blocked"],
    ["Medium", "API Abuse", "cosmos.payserv.net", "Reported"],
    ["Low", "Bot Activity", "portal.paynamics.biz", "Reported"],
  ];

  return (
    <div style={styles.page}>
      <nav style={styles.navbar}>
        <div style={styles.logo}>☁️ Cloud Security Team</div>
        <div style={styles.navLinks}>
          <span>Dashboard</span>
          <span>Threats</span>
          <span>Apps</span>
          <span>PCI DSS</span>
          <span>Reports</span>
        </div>
      </nav>

      <section style={styles.hero}>
        <div>
          <p style={styles.kicker}>AWS WAF • RADWARE • PCI DSS</p>
          <h1 style={styles.title}>WAF Security Operations Center</h1>
          <p style={styles.subtitle}>
            Web application protection dashboard for blocked attacks, security events,
            top targeted applications, and compliance monitoring.
          </p>
        </div>

        <div style={styles.statusBox}>
          <p>Environment</p>
          <h2>PROD</h2>
          <span>Block & Report</span>
        </div>
      </section>

      <section style={styles.statsGrid}>
        <Card title="Protected Apps" value="24" color="#60a5fa" />
        <Card title="Blocked Attacks" value="1,284" color="#f87171" />
        <Card title="Critical Events" value="12" color="#fbbf24" />
        <Card title="Security Score" value="94%" color="#4ade80" />
      </section>

      <section style={styles.threatGrid}>
        <Threat title="Cross Site Scripting" value="518" />
        <Threat title="SQL Injection" value="342" />
        <Threat title="API Abuse" value="211" />
        <Threat title="Broken Access Control" value="126" />
      </section>

      <section style={styles.mainGrid}>
        <div style={styles.panelLarge}>
          <h2 style={styles.panelTitle}>Recent Security Events</h2>

          <table style={styles.table}>
            <thead>
              <tr>
                <th>Severity</th>
                <th>Attack</th>
                <th>Application</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {events.map(([severity, attack, app, action]) => (
                <tr key={attack}>
                  <td style={{ color: getColor(severity), fontWeight: "800" }}>
                    {severity}
                  </td>
                  <td>{attack}</td>
                  <td>{app}</td>
                  <td>{action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={styles.panel}>
          <h2 style={styles.panelTitle}>Top Targeted Applications</h2>

          {[
            "api.payserv.net",
            "cosmos.payserv.net",
            "portal.paynamics.biz",
            "payin.paynamics.net",
            "dgate.paynamics.net",
          ].map((app, index) => (
            <div style={styles.appItem} key={app}>
              <span>{index + 1}. {app}</span>
            </div>
          ))}
        </div>
      </section>

      <section style={styles.bottomGrid}>
        <div style={styles.panel}>
          <h2 style={styles.panelTitle}>OWASP Coverage</h2>
          <p>A01 Broken Access Control</p>
          <p>A03 Injection</p>
          <p>A05 Security Misconfiguration</p>
          <p>A07 Authentication Failures</p>
        </div>

        <div style={styles.panel}>
          <h2 style={styles.panelTitle}>PCI DSS Monitoring</h2>
          <p>✅ PCI DSS 6.4.3 Compliant</p>
          <p>✅ PCI DSS 11.6.1 Monitoring Active</p>
          <p>⚠️ PCI DSS 12.10 Review Required</p>
        </div>

        <div style={styles.panel}>
          <h2 style={styles.panelTitle}>Security Summary</h2>
          <p>24 protected applications</p>
          <p>1,284 blocked attacks</p>
          <p>94% security posture</p>
          <p>12 critical events for review</p>
        </div>
      </section>
    </div>
  );
}

function Card({ title, value, color }) {
  return (
    <div style={styles.card}>
      <p style={styles.cardTitle}>{title}</p>
      <h1 style={{ ...styles.cardValue, color }}>{value}</h1>
    </div>
  );
}

function Threat({ title, value }) {
  return (
    <div style={styles.threatCard}>
      <h3>{title}</h3>
      <h1>{value}</h1>
      <p>Blocked Events</p>
    </div>
  );
}

function getColor(severity) {
  if (severity === "Critical") return "#f87171";
  if (severity === "High") return "#fb923c";
  if (severity === "Medium") return "#fbbf24";
  return "#4ade80";
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#0f172a",
    color: "#f8fafc",
    padding: "22px",
    fontFamily: "Segoe UI, Arial, sans-serif",
  },
  navbar: {
    maxWidth: "1280px",
    margin: "0 auto 22px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    fontSize: "22px",
    fontWeight: "900",
    color: "#38bdf8",
  },
  navLinks: {
    display: "flex",
    gap: "22px",
    fontSize: "14px",
    fontWeight: "700",
  },
  hero: {
    maxWidth: "1280px",
    margin: "0 auto 20px",
    background: "linear-gradient(135deg,#1e293b,#1e40af)",
    borderRadius: "22px",
    padding: "28px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "24px",
  },
  kicker: {
    color: "#93c5fd",
    fontWeight: "900",
    margin: "0 0 8px",
    fontSize: "13px",
    letterSpacing: "1px",
  },
  title: {
    margin: 0,
    fontSize: "34px",
    lineHeight: "1.15",
    color: "#ffffff",
  },
  subtitle: {
    marginTop: "10px",
    maxWidth: "720px",
    color: "#dbeafe",
    fontSize: "15px",
    lineHeight: "1.6",
  },
  statusBox: {
    background: "rgba(255,255,255,0.12)",
    border: "1px solid rgba(255,255,255,0.2)",
    borderRadius: "18px",
    padding: "18px 24px",
    textAlign: "center",
    minWidth: "170px",
  },
  statsGrid: {
    maxWidth: "1280px",
    margin: "0 auto 18px",
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "16px",
  },
  card: {
    background: "#1e293b",
    borderRadius: "18px",
    padding: "22px",
    textAlign: "center",
  },
  cardTitle: {
    color: "#cbd5e1",
    fontWeight: "800",
    margin: 0,
  },
  cardValue: {
    fontSize: "38px",
    margin: "12px 0 0",
  },
  threatGrid: {
    maxWidth: "1280px",
    margin: "0 auto 18px",
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "16px",
  },
  threatCard: {
    background: "#111827",
    border: "1px solid #334155",
    borderRadius: "18px",
    padding: "22px",
    textAlign: "center",
  },
  mainGrid: {
    maxWidth: "1280px",
    margin: "0 auto 18px",
    display: "grid",
    gridTemplateColumns: "2fr 1fr",
    gap: "18px",
  },
  bottomGrid: {
    maxWidth: "1280px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "18px",
  },
  panel: {
    background: "#1e293b",
    borderRadius: "18px",
    padding: "22px",
  },
  panelLarge: {
    background: "#1e293b",
    borderRadius: "18px",
    padding: "22px",
  },
  panelTitle: {
    marginTop: 0,
    marginBottom: "16px",
    color: "#ffffff",
    fontSize: "20px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    textAlign: "left",
    lineHeight: "2.4",
  },
  appItem: {
    background: "#0f172a",
    padding: "13px",
    borderRadius: "12px",
    marginBottom: "10px",
    fontWeight: "800",
  },
};

export default App;
