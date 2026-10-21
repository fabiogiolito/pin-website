export interface McpFaqItem {
  question: string;
  answer: string;
}

export const mcpFaqItems: McpFaqItem[] = [
  {
    question: "What is an MCP server?",
    answer:
      "MCP (Model Context Protocol) is an open standard from Anthropic that lets AI assistants call external tools and read external data. An MCP server exposes a set of named tools the assistant can invoke. Pin's MCP server exposes ten recruiting tools — searching, reviewing, tuning, and memory — to any MCP-compatible client: Claude Desktop, Claude Code, ChatGPT, OpenAI Codex, Cursor, Windsurf, and others.",
  },
  {
    question: "Do I need a Pin account to use the Pin MCP?",
    answer:
      "Yes. The Pin MCP is an interface to your Pin workspace — it doesn't operate standalone. If you don't have an account, start free at pin.com; the MCP is included on every paid plan at no extra cost.",
  },
  {
    question: "Which AI assistants does the Pin MCP support?",
    answer:
      "Any MCP-compatible client that supports Streamable HTTP. We test against Claude Desktop, Claude Code, ChatGPT, and OpenAI Codex. Cursor, Windsurf, Zed, and Continue also work because they implement the same spec.",
  },
  {
    question: "Is the Pin MCP free?",
    answer:
      "It's included at no additional cost on every paid Pin plan. There's no metered call limit, no per-seat MCP fee, and no enterprise upsell gating.",
  },
  {
    question: "What transport does the server use?",
    answer:
      "Streamable HTTP (the modern MCP transport) over a single endpoint at https://mcp.pin.com/mcp. Authentication is OAuth 2.1 with PKCE and dynamic client registration, brokered by WorkOS. The server is stateless — every request spins up a fresh MCP instance, so it scales horizontally and has no session to lose.",
  },
  {
    question: "What OAuth scopes does the Pin MCP request?",
    answer:
      "One: `mcp`. It grants tool access inside your Pin workspace and nothing else. Billing, team admin, and org settings are not reachable through the MCP under any circumstances.",
  },
  {
    question: "What tools does the server expose?",
    answer:
      "Ten, grouped by phase. Setup: `list_jobs`, `scrape_job_description`, `create_job`. Review: `get_candidates`, `accept_candidate`, `reject_candidate`. Tuning: `modify_search`, `recalibrate_search`. Memory: `read_job_memory`, `update_job_memory`.",
  },
  {
    question: "Can the assistant send outreach without my approval?",
    answer:
      "No. Outreach is only queued when `accept_candidate` fires, and that tool call is shown to you by your client before it runs. There is no draft-and-send-silently path. You can also revoke the token at any time and in-flight calls fail immediately with 401.",
  },
  {
    question: "How does the memory work?",
    answer:
      "Each job has a per-workspace memory slot. `update_job_memory` persists a running summary — what you accept, what you decline, patterns the assistant spotted, and its current confidence. `read_job_memory` pre-loads that summary on the next session. The assistant uses it to pre-judge candidates the way you would.",
  },
  {
    question: "What is autonomous mode?",
    answer:
      "Once the assistant has correctly predicted your accept/reject call three or more times in a row, it'll offer to take over — fetching candidates, making decisions, and calling `recalibrate_search` or `update_job_memory` as patterns emerge. It stops when it hits the number of accepts you asked for, or when it's no longer confident. You're always the one who opts in.",
  },
  {
    question: "What data can the assistant see?",
    answer:
      "Only what `get_candidates` and related tools return for roles in your workspace. Candidate PII is fetched from Pin but not echoed into the chat unless the assistant repeats it. Every read and write is tagged with your userId and orgId and logged in the Pin audit trail.",
  },
  {
    question: "How do I revoke access?",
    answer:
      "Go to pin.com → Settings → Connected Apps, find the assistant, and click Revoke. The bearer token is invalidated on the spot; any in-flight tool calls fail with 401.",
  },
  {
    question: "Does the Pin MCP work for agencies with multiple clients?",
    answer:
      "Yes. Agency workspaces in Pin already support multi-client separation, and the MCP inherits those boundaries. Each client workspace gets its own OAuth flow and its own set of candidates, jobs, and memory.",
  },
  {
    question: "Is this different from a ChatGPT plugin or a Claude skill?",
    answer:
      "Yes. Plugins and skills are vendor-specific integrations that only work inside one product. MCP is an open protocol, so the exact same Pin server works across every compatible client. Build once, use everywhere.",
  },
  {
    question: "Can I self-host the Pin MCP?",
    answer:
      "The default deployment is a hosted remote server at mcp.pin.com. For enterprise customers with air-gapped requirements, we offer a self-hosted build on request — talk to sales.",
  },
  {
    question: "How is this different from Pin's ATS integrations?",
    answer:
      "ATS integrations (Greenhouse, Lever, Ashby, 120+ more) sync candidate data between Pin and your ATS. The MCP is an interface to Pin itself — it's how your assistant talks to Pin, not how Pin talks to other systems. Most teams use both.",
  },
  {
    question: "What happens if a tool call fails?",
    answer:
      "The MCP returns a structured error; the assistant surfaces a plain-English version and suggests a fix (e.g., rephrase, narrow the search, wait for sourcing to finish). Failed calls are logged in the Pin audit trail for review.",
  },
];
