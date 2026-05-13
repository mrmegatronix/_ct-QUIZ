/**
 * Mother's Day Celebration - Configuration
 */

window.KING_CONFIG = {
    // ── EVENT IDENTITY ──────────────────────────────────────────────────
    EVENT_NAME: "King's Birthday Karaoke",
    EVENT_SUBTITLE: "Long weekend celebration",
    
    // ── DATA SOURCES ────────────────────────────────────────────────────
    // Google Sheets CSV URL (must be 'Published to Web' as CSV)
    GSHEETS_URL: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQG9Gt_6Wi1rVS6DFjBpsOCXFzUDUD-nsgSLAZBIKb-D9KV6JUiW7XzWNAj34A_hpdvA4wmIRLhegXo/pub?output=csv',
    
    // Firebase Realtime Database URL (for cross-device sync)
    FIREBASE_DB_URL: '', // Add your Firebase URL here for remote control
    
    // ── VISUAL STYLING ──────────────────────────────────────────────────
    COLORS: {
        primary: '#FFD700',        // Gold
        softPink: '#1A1A2E',
        cream: '#0F0F1A',
        textDark: '#FFFFFF',
        glow: 'rgba(255, 215, 0, 0.4)'
    },
    
    // ── ASSETS ──────────────────────────────────────────────────────────
    LOGO_PATH: 'coasters-logo.png',
    AVATAR_FALLBACK: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&q=80&w=2000',
    CONFETTI_SYMBOLS: ['👑', '🤴', '👸'],
    
    // ── FEATURES ────────────────────────────────────────────────────────
    VOICE_ENABLED_DEFAULT: false,
    SYNC_INTERVAL_MS: 5 * 60 * 1000 // 5 minutes
};
