# Changelog

## v1.0.10 (2026-11-20)

- **Native In-App Check & Direct Update on macOS**: Signed Ed25519 universal `.app.tar.gz` updater packages with automatic in-app download progress, cryptographic verification, atomic bundle replacement, and one-click relaunch.
- **Native In-App Check & Verified APK Update on Android (Website Channel)**: Automatic update checks against unified `latest.json`, in-app download progress bar, mandatory local SHA-256 verification, cached resume after permission toggle, and direct system installer launch via `FileProvider` (Google Play builds strictly omit `REQUEST_INSTALL_PACKAGES` and route updates through Play Store).
## v1.0.9 (2026-11-20)

- **Dedicated Residential IP & 3-Mode Chain Routing**: Built-in residential IP ordering and renewal (keeping the same IP), plus 3 chain routing modes (`AI Smart`, `Custom Split` with multi-exit DNS isolation, and `All Residential`) with real 2-hop exit verification across Windows, macOS, and Android.
- **Dual-Layer Ad & Tracker Blocking + Custom Route Groups**: Bundled offline `anti-AD` binary `.srs` ruleset (101k rules) alongside optional AdGuard DNS filter updates and visual custom routing rule groups.
- **Refined Stage UI & Full 20-Language Localization**: 72-country vector flags, collapsible account cards, redesigned Referral Rewards page, Android 15 edge-to-edge & gesture navigation refinements, upgraded 2 MiB macOS TUN helper, and 100% localized copy across all 20 languages.
## v1.0.8 (2026-11-18)

- **Multi-Hop Chain Proxy Modal & Residential Proxy Support**: Dedicated Chain Proxy configuration modal across platforms supporting `SOCKS5`, `HTTP`, `VLESS`, `Hysteria2`, `Trojan`, `Shadowsocks`, and `VMess` exit nodes alongside subscription URLs.
- **Editable Domestic & Forced-Proxy Routing Rules**: Two-tab visual routing editor for custom direct-bypass domains/CIDRs and high-priority forced-VPN overrides, plus DNS-level ad & tracker blocking across platforms.
- **Refined Default Light Stage UI & Single-Screen Account View**: Crisp default Porcelain light appearance, compact single-screen grouped Account Details layout, and 60-second OTP resend protection.

## v1.0.6 (2026-11-17)

- **Full-Stack Security Hardening**: Strict Tauri & Web CSP, privilege-separated macOS SUID TUN helper (`root:wheel 0755` fixed path validation), DNS leak prevention before private CIDR bypass (`sniff` + `hijack-dns`), constant-time MCP loopback auth, and Android `FLAG_SECURE` + notification privacy redaction.
- **Account & Session Defense-in-Depth**: Masked activation codes at rest in client storage, password-gated code rotation/reveal, atomic OTP lockout, and `HS256` `tokenVersion` device-bound sessions.
- **Signed In-App Auto-Updater**: Seamless signed Windows `.msi` in-app updates via `latest.json`.

## v1.0.5 (2026-11-16)

- **20 Native Auto-Detected Languages & Native RTL**: Added Arabic, Persian, Dutch, Swedish, Norwegian, Danish, Greek, and Azerbaijani with full RTL layout mirroring.
- **AnyTLS Protocol Support**: Native `sing-box 1.14.3` `AnyTLS` outbound parsing across Windows, macOS, and Android.

## v1.0.4 (2026-11-14)

- **Opt-In Local MCP Server (Windows & macOS)**: Paid YiPro users can enable a loopback-only Model Context Protocol server (`127.0.0.1:38419/mcp` + `stdio` bridge via [`yivpn-agent-cli`](https://github.com/yivpn-official/yivpn-agent-cli)) exposing 8 tools (`get_capabilities`, `get_vpn_status`, `list_servers`, `connect_vpn`, `disconnect_vpn`, `diagnose_connection`, `preview_routing_rules`, `apply_routing_rules`, `rollback_routing_rules`) with live `sing-box` verification and automatic rollback on failure.
- **Stage UI v2 Across All Platforms**: Unified Porcelain & Obsidian frosted-glass interface across Windows, macOS (Universal Apple Silicon & Intel), and Android (`arm64-v8a`).
- **12 Native Languages**: Simplified Chinese, Traditional Chinese, English, Russian, Japanese, Korean, Spanish, French, German, Portuguese, Italian, and Turkish.
- **Official Windows MSVC `.msi` & Portable `.zip`**: Standard Windows Installer (`YIVPN_1.0.4_x64.msi`) with static WebView2 loader and bundled `sing-box 1.14.3` core.
- **Instant Cancel & Multi-Socket RTT Racing on Android**: Sub-50ms connection abort and 8-thread concurrent TCP/QUIC latency probing.
