import styles from '@/styles/settings-styles/Billings.module.css'
import SectionHeading from "@/components/SectionHeading";
import { FaCheck } from "react-icons/fa6";
import logo from "@/assets/images/logo.svg";
import Image from "next/image";
import { IoMdClose } from "react-icons/io";
import Button from "@/components/Button";
import { IoIosArrowDropright } from "react-icons/io";
import { MdStorage, MdPerson, MdAnalytics } from "react-icons/md";

export default function Billing() {
  const freePlanFeatures = ["Basic Profile", "Limited Reviews", "Basic Recommendations", "Standard Support", "Ad-supported"];
  const premiumPlanFeatures = ["Premium Profile", "Unlimited Reviews", "Advanced Recommendations", "Priority Support", "Ad-Free Experience", "Exclusive Content", "Early Access", "Premium Features"];

  const addOns = [
    { name: "Additional Storage", subtext: "Expand Your Capacity", description: "Access additional storage to support your growing needs and projects", icon: MdStorage },
    {
      name: "Better Profile Customization",
      subtext: "Personalize Your Presence",
      description: "Unlock advanced customization options to tailor your profile to your unique style and preferences",
      icon: MdPerson,
    },
    {
      name: "Advanced Analytics",
      subtext: "Gain Deeper Insights",
      description: "Access enhanced analytics and insights into user engagement, content performance, and audience demographics to make more informed decisions and optimize your content strategy",
      icon: MdAnalytics,
    },
  ];

  return (
    <div className="fw-light">
      <section>
      <SectionHeading on={true} section="Billing summary"></SectionHeading>
      <p className="subtext">View and manage your current subscription plan and access details.</p>
      <div className={styles["summary-container"]}>
        <div className={styles["summary"]}>
          <div>Your next payment</div>
          <div className="fw-medium fs-4 my-2">$0.01</div>
          <div style={{ fontSize: "12px" }}>This amount does not include the spend on usage of metered service. View your usage this month below.</div>
        </div>
        <div className={styles["more-options-container"]}>
          <p>
            Payment information <IoIosArrowDropright size={"16px"} style={{ marginBottom: "2px" }}></IoIosArrowDropright>
          </p>
          <ul className={styles["options"]}>
            <li><a className="text-decoration-none" href="#">Manage spending limit</a></li>
            <li><a className="text-decoration-none" href="#">View payment history</a></li>
            <li><a className="text-decoration-none"href="#">Switch to yearly billing</a></li>
          </ul>
        </div>
      </div>
      </section>
      <section>
      <SectionHeading on={true} section="Current plan"></SectionHeading>
      <p className="subtext">Choose the plan that best fits your needs to unlock premium features and enhance your experience.</p>
      <div className={styles["plan-container"]}>
        <div className={styles["plan-heading"]}>
          <Image src={logo} alt="Logo" width={50} height={50} />
          <div className="ms-2">
            <h6 className={styles["web-title"]}>Vernacular Free</h6>
            <div className={styles["plan-subtext"]}>The basics for all reviewers</div>
          </div>
          <div className={`ms-auto text-end d-flex flex-sm-row flex-column ${styles["btn-group"]}`}>
            <Button styleClass={styles["compare-button"]} href="#" buttonColor={{ bootstrapColor: "btn btn-outline-success" }} radius="10px" padding="7px 10px 7px 10px" width="auto" type="button">
              Compare all Plans
            </Button>
            <Button styleClass={styles["upgrade-button"]} buttonColor={{ cssColor: "#1F883D" }} radius="10px" padding="7px 10px 7px 10px" width="auto" type="button">
              Upgrade
            </Button>
          </div>
        </div>
        <div className="d-flex flex-column flex-sm-row">
          <div className="col-6 ps-3">
            <div className="my-2 text-secondary">Included:</div>
            <ul className={styles["plan-list"]}>
              {freePlanFeatures.map((feature, i) => (
                <li key={i} className="mb-2">
                  <FaCheck color="green"></FaCheck>&nbsp;&nbsp;{feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-6 ps-3">
            <div className="my-2 text-secondary">Not Included:</div>
            <ul className={styles["plan-list"]}>
              {premiumPlanFeatures.map((feature, i) => (
                <li key={i} className="mb-2">
                  <IoMdClose color="red"></IoMdClose>&nbsp;&nbsp;{feature}
                </li>
              ))}
            </ul>
            <div className={styles["alt-plan"]}>See all features and compare plans</div>
          </div>
        </div>
      </div>
      </section>
      <section>
      <SectionHeading on={true} section="Add-ons"></SectionHeading>
      <p className="subtext">Discover optional features and upgrades to tailor your experience to your needs.</p>
      {addOns.map((addOn, i) => (
        <div key={i} className={styles["addOn-container"]}>
          <div className={styles["addOn-heading"]}>
            <addOn.icon style={{ marginBottom: "3px" }} size={40}></addOn.icon>
            <div className="ms-2">
              <h6 className={styles["addOn-title"]}>{addOn.name}</h6>
              <div className={styles["addOn-subtext"]}>{addOn.subtext}</div>
            </div>
            <div className="ms-auto align-self-center">
              <Button styleClass={styles["addOn-button"]} buttonColor={{ cssColor: "#1F883D" }} radius="10px" padding="7px 10px 7px 10px" width="auto" type="button">
                Add
              </Button>
            </div>
          </div>
          <div className="p-3">{addOn.description}</div>
        </div>
      ))}
      </section>
    </div>
  );
}
