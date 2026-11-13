# Changelog

## v1.0.4 (2026-11-14)

- **Opt-In Local MCP Server (Windows & macOS)**: Paid YiPro users can enable a loopback-only Model Context Protocol server (`127.0.0.1:38419/mcp` + `stdio` bridge via [`yivpn-agent-cli`](https://github.com/yivpn-official/yivpn-agent-cli)) exposing 8 tools (`get_capabilities`, `get_vpn_status`, `list_servers`, `connect_vpn`, `disconnect_vpn`, `diagnose_connection`, `preview_routing_rules`, `apply_routing_rules`, `rollback_routing_rules`) with live `sing-box` verification and automatic rollback on failure.
- **Stage UI v2 Across All Platforms**: Unified Porcelain & Obsidian frosted-glass interface across Windows, macOS (Universal Apple Silicon & Intel), and Android (`arm64-v8a`).
- **12 Native Languages**: Simplified Chinese, Traditional Chinese, English, Russian, Japanese, Korean, Spanish, French, German, Portuguese, Italian, and Turkish.
- **Official Windows MSVC `.msi` & Portable `.zip`**: Standard Windows Installer (`YIVPN_1.0.4_x64.msi`) with static WebView2 loader and bundled `sing-box 1.14.3` core.
- **Instant Cancel & Multi-Socket RTT Racing on Android**: Sub-50ms connection abort and 8-thread concurrent TCP/QUIC latency probing.
