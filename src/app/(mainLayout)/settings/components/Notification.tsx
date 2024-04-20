import SectionHeading from "@/components/SectionHeading";
import styles from "@/styles/settings-styles/Notification.module.css";

export default function Notification() {
  const notifications = [
    { title: "Comments", preferences: ["New comments on your posts", "Replies to your comments"] },
    { title: "Likes", preferences: ["Likes on your posts"] },
    { title: "Followers", preferences: ["New followers"] },
    { title: "Reviews", preferences: ["New reviews on your titles", "Updates on your reviewed titles"] },
    { title: "Recommendations", preferences: ["Recommended titles based on your preferences"] },
  ];

  return (
    <div>
      <SectionHeading on={true} section="Notifications"></SectionHeading>
      <p className="subtext">Manage your personal notification settings.</p>
      <div className={`${styles["container"]}`}>
        <h5 className={`${styles["web"]}`}>Web</h5>
        <div className="d-flex flex-column">
          {notifications.map((e, i) => (
            <div className="px-4 py-2" key={i}>
              <div className={`py-2 ${styles["title"]}`}>{e.title}</div>
              {e.preferences.map((preference, j) => (
                <div className={`py-3 ${j !== e.preferences.length - 1 ? styles["divider"] : ""}`}  key={`${i}-${j}`}>
                  <input className={`form-check-input input-checkbox`} type="checkbox"/>
                  <label className={`ms-2 form-check-label ${styles["label"]}`}>{preference}</label>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
