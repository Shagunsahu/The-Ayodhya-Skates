import aryavartLogo from "@/assets/school logo/logo.jpg";
import bhavdiyaLogo from "@/assets/school logo/images.jpeg";
import faizabadLogo from "@/assets/school logo/logo_fps_new.png";
import jaipuriaMajnaiLogo from "@/assets/school logo/SAJS-Ayodhya-Website.jpg";
import hcjLogo from "@/assets/school logo/logo-1.webp";
import jingleBellSchoolLogo from "@/assets/school logo/JBS-1.jpg";
import jingleBellAcademyLogo from "@/assets/school logo/jba-logo.jfif";
import mrJaipuriaLogo from "@/assets/school logo/MRD LOGO.webp";

const logoByFileName: Record<string, string> = {
  "logo.jpg": aryavartLogo,
  "images.jpeg": bhavdiyaLogo,
  "logo_fps_new.png": faizabadLogo,
  "SAJS-Ayodhya-Website.jpg": jaipuriaMajnaiLogo,
  "logo-1.webp": hcjLogo,
  "JBS-1.jpg": jingleBellSchoolLogo,
  "jba-logo.jfif": jingleBellAcademyLogo,
  "MRD LOGO.webp": mrJaipuriaLogo,
};

const getFileNameFromPath = (value: string) => {
  const decoded = decodeURIComponent(value);
  return decoded.split("/").filter(Boolean).pop() ?? decoded;
};

export const resolvePartnerLogo = (image?: string | null, name?: string | null) => {
  if (!image) {
    return null;
  }

  const fileName = getFileNameFromPath(image);
  const byFileName = logoByFileName[fileName];
  if (byFileName) {
    return byFileName;
  }

  if (name?.toLowerCase().includes("aryavart")) {
    return aryavartLogo;
  }

  if (name?.toLowerCase().includes("bhavdiya")) {
    return bhavdiyaLogo;
  }

  if (name?.toLowerCase().includes("faizabad")) {
    return faizabadLogo;
  }

  if (name?.toLowerCase().includes("jaipuria")) {
    return jaipuriaMajnaiLogo;
  }

  if (name?.toLowerCase().includes("hcj")) {
    return hcjLogo;
  }

  if (name?.toLowerCase().includes("jingle bell school")) {
    return jingleBellSchoolLogo;
  }

  if (name?.toLowerCase().includes("jingle bell academy")) {
    return jingleBellAcademyLogo;
  }

  if (name?.toLowerCase().includes("m.r.jaipuria") || name?.toLowerCase().includes("mrjaipuria")) {
    return mrJaipuriaLogo;
  }

  return null;
};