export interface AdminLoginCredentials {
  email?: string;
  password?: string;
}

export interface AdminLoginConfig {
  adminEmail?: string;
  adminEmails?: string[];
  adminPassword?: string;
  isProduction?: boolean;
}

export function authenticateAdminLogin(
  credentials: AdminLoginCredentials,
  config: AdminLoginConfig = {}
) {
  const normalizedEmail = credentials.email?.trim().toLowerCase() ?? "";
  const expectedEmails = [
    config.adminEmail?.trim().toLowerCase(),
    ...(config.adminEmails || []),
    "admin@theayodhyaskates.in",
  ].filter((value): value is string => Boolean(value));
  const expectedPassword = config.adminPassword ?? (config.isProduction ? "" : "admin123");

  const emailMatches = expectedEmails.includes(normalizedEmail);
  const passwordMatches = Boolean(expectedPassword) && (credentials.password ?? "") === expectedPassword;

  return {
    ok: emailMatches && passwordMatches,
    emailMatches,
    passwordMatches,
  };
}
