import { FaGear, FaReceipt, FaPaintbrush, FaBell } from "react-icons/fa6";
import { MdPrivacyTip,MdPolicy  } from "react-icons/md";
import { GiAerialSignal } from "react-icons/gi";
import { IoHomeSharp } from "react-icons/io5";
import { RiCommunityFill } from "react-icons/ri";

export const searchable = [{
    section: "Home",
    link:"",
    keywords: ["Newsletter", "Inspiration", "Steps", "Management", "Smart", "Power tools", "Features", "Creative", "Customizable", "Question", "FAQ", "Ask", "Question", "Upgrade", "Started", "Learn"],
    icon:<IoHomeSharp></IoHomeSharp>,
    location:"Home"

  },
  {
    section:"General",
    link:"settings/general",
    desc:"General Settings. Customize your profile to reflect your identity and preferences. Update your avatar, name, and contact details, or manage acc.",
    keywords: ["Avatar", "Display Name", "Email", "Phone Number", "Biography", "Password", "Delete Account"],
    icon:<FaGear color="lightgreen"></FaGear>,
    location:"Settings"
  },
  {
    section:"Billing",
    link:"settings/billing",
    desc:"View and manage your current subscription plan and access details.",
    keywords:["Billing Summary", "Current Subscription", "Current Plan", "Payment Information", "Add-ons"],
    icon:<FaReceipt color="lightgreen"></FaReceipt>,
    location:"Settings"

  },
  {
    section:"Web sessions",
    link:"settings/sessions",
    desc:"This is a list of devices that have logged into your account.",
    keywords:["Mobile" ],
    icon:<GiAerialSignal color="lightgreen"></GiAerialSignal>,
    location:"Settings"

  },
  {
    section:"Notifications",
    link:"settings/notification",
    desc:"Manage your personal notification settings.",
    keywords:["Comments", "Likes", "Followers", "Reviews", "Recommendations"],
    icon:<FaBell color="lightgreen"></FaBell>,
    location:"Settings"

  },
  {
    section:"Appearance",
    link:"settings/appearance",
    desc:"Choose how Vernacular looks to you. Select a single theme, or sync with your system and automatically switch between day and night themes.",
    keywords:["Emoji skin tone", "Preference", "Accent color", "Dark", "Light"],
    icon:<FaPaintbrush color="lightgreen"></FaPaintbrush>,
    location:"Settings"

  },
  {
    section:"Privacy & Security",
    link:"settings/privacy-security",
    desc:"Choose who can see your profile and its content. Control visibility settings to make your profile public, visible to friends only, or completely private.",
    keywords:["Two-Factor auth", "2FA", "Report", "Block", "Data", "Policy", "Usage"],
    icon:<MdPrivacyTip color="lightgreen"></MdPrivacyTip>,
    location:"Settings"

  },
  
  {
    section:"Community",
    link:"playlist/community/1",
    icon:<RiCommunityFill color="yellow"></RiCommunityFill>,
    location:"Community"

  },
  {
    section:"Terms of Service",
    link:"tos",
    desc:"Privacy Policy",
    keywords:["Terms", "Conditions", "Rules", "Regulations", "Cookies", "License", "Content", "Liability", "Rights", "Removal", "Disclaimer"],
    icon:<MdPolicy color="#8585ff"></MdPolicy>,
    location:"TOS"

  }
];
   