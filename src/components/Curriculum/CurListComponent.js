import React, { useState } from "react";
import logo2 from "../../assets/logow.png";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import NavComponent from "../Nav/NavComponent.js";
import { FaArrowRightLong } from "react-icons/fa6";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-scroll";
import Fade from "react-reveal/Fade";

function ModalComponent({ modal, toggleModal, title }) {
  const [message, setMessage] = useState([]);
  React.useEffect(() => {
    switch (title) {
      case "Technology":
        setMessage(technology);
        break;
      case "Philosophy":
        setMessage(philosophy);
        break;
      case "Arts":
        setMessage(art);
        break;
      case "Core Learning":
        setMessage(coreClasses);
        break;
      default:
        setMessage([]);
    }
  }, [title]);

  const closeBtn = (
    <button className="close" onClick={toggleModal} type="button">
      &times;
    </button>
  );

  const coreClasses = [
    "Core Learning",
    "Language Arts",
    "Math",
    "Science",
    "Engineering",
  ];

  const art = [
    "Art",
    "Creativity",
    "All Art Mediums",
    "Music",
    "Paint",
    "Tech",
    "Performance",
    "Film",
    "Coding",
    "AR/VR",
    "Art History",
    "Study",
  ];

  const philosophy = [
    "Philosophy",
    [
      [
        "Critical Thinking",
        [
          "Problem-solving",
          "Design Challenges",
          "Logical",
          "Problem-solving Questions",
          "Engineer Mindset",
          "Architect Mindset",
          "Creator Mindset",
        ],
      ],
      [
        "Philosophical Thought",
        [
          "Free-thinking",
          "Literature",
          "History",
          "Self-History",
          "Health",
          "Growth",
          "Futuristic Mindset",
          "Thinking",
          "Open minded",
          "Cyphers",
          "Power of Visualization(Mind)",
        ],
      ],
      [
        "Experience",
        [
          "World Teachings",
          "Imagery",
          "Field Trips",
          "Mind",
          "Possibility Expansion",
          "Access to up-to-date Resources",
          "Outdoor",
          "Different Spaces",
          "Environments Learning",
          "Growing Food",
          "Financial literacy",
        ],
      ],
    ],
  ];
  const technology = [
    "Technology",
    [
      ["Computers", ["Building Computers", "How Computers work"]],
      [
        "General Technology Literacy/Information",
        [
          "Internet Literacy/Safety",
          "Technology Literacy",
          "New Technology Information",
          "Web 3",
        ],
      ],
      [
        "AR/VR",
        ["AR/VR Information", "AR/VR Literacy", "Creating for AR/VR platforms"],
      ],
      [
        "3D Modeling",
        ["3D printing", "3D worlds/spaces/art", "3D tools/objects"],
      ],
      [
        "Robotics/Electronics",
        [
          "Creative robotics",
          "Electronics Information",
          "Electronics Literacy",
          "Soldering",
        ],
      ],
      [
        "Coding",
        [
          "Block code",
          "Python/Java",
          "Web development",
          "Robot C",
          "Game development",
          "Creative coding",
        ],
      ],
      [
        "Engineering",
        [
          "CAD software Literacy",
          "Architecture Information",
          "Engineering Information",
          "Engineering Sketching/Designing Process",
        ],
      ],
    ],
  ];
  const renderList = (items, depth = 0) => {
    if (!Array.isArray(items)) {
      return (
        <li style={{ fontWeight: depth === 0 ? "bold" : "lighter" }}>
          {items}
        </li>
      );
    }

    return (
      <ul>
        {items.map((item, index) => {
          if (Array.isArray(item)) {
            return (
              <li key={index} style={{ fontWeight: depth === 0 ? 700 : 500 }}>
                {Array.isArray(item[0]) ? renderList(item, depth + 1) : item[0]}
                {renderList(item[1], depth + 1)}
              </li>
            );
          } else {
            return (
              <li key={index} style={{ fontWeight: depth === 0 ? 700 : 300 }}>
                {item}
              </li>
            );
          }
        })}
      </ul>
    );
  };

  return (
    <div>
      <Modal
        zIndex={999}
        centered
        className="c-modal"
        isOpen={modal}
        toggle={toggleModal}
      >
        <ModalHeader
          className=" justify-between flex"
          toggle={toggleModal}
          close={closeBtn}
        >
          <span className="header">Curriculum List</span>
        </ModalHeader>
        <ModalBody className="body">{renderList(message)}</ModalBody>
        <ModalFooter>
          <Button className="button" onClick={toggleModal}>
            Close Modal
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default function CurListComponent() {
  const [modal, setModal] = useState(false);
  const [title, setTitle] = useState("");

  const toggle = (newTitle = "") => {
    setModal(!modal);
    setTitle(newTitle);
  };

  return (
    <>
      <ModalComponent modal={modal} toggleModal={toggle} title={title} />
      <div className="cl-container" id="cur-list">
        <div className="cl-content mx-auto">
          <Fade>
            <h1 className="text-center pb-12"> Curriculum</h1>
          </Fade>
          <div className="box-group mx-auto flex gap-4">
            <div className="box mx-auto">
              <h4>Technology</h4>
              <ul>
                <li>Coding</li>
                <li>Robotics</li>
                <li>Engineering</li>
                <li>Tech Literacy</li>
                <li>Electronics</li>
                <li>Computer</li>
                <li>AR/VR</li>
              </ul>
              <div className="">
                <button
                  className="mx-auto"
                  onClick={() => toggle("Technology")}
                >
                  View Curriculum
                </button>
              </div>
            </div>

            <div className="box mx-auto">
              <h4>Philosophy</h4>
              <ul>
                <li>Literature</li>
                <li>Problem Solving</li>
                <li>Free-thinking</li>
                <li>Experiences</li>
                <li>Self-History</li>
                <li>
                  Future Mindset <br></br>
                  <br></br>
                </li>
              </ul>
              <div className="">
                <button
                  className="mx-auto"
                  onClick={() => toggle("Philosophy")}
                >
                  View Curriculum
                </button>
              </div>
            </div>

            <div className="box mx-auto">
              <h4>Arts</h4>
              <ul>
                <li>Creativity</li>
                <li>Music</li>
                <li>Painting</li>
                <li>Film</li>
                <li>Art History</li>
                <li>3D Modeling</li>
                <li>Performance</li>
              </ul>
              <div className="">
                <button className="mx-auto" onClick={() => toggle("Arts")}>
                  View Curriculum
                </button>
              </div>
            </div>

            <div className="box mx-auto">
              <h4>Core Learning</h4>
              <ul>
                <li>Math</li>
                <li>Language Arts</li>
                <li>Science</li>
                <li>Engineering</li>
                <li>
                  History<br></br>
                  <br></br>
                  <br></br>
                </li>
              </ul>
              <div className="">
                <button
                  className="mx-auto"
                  onClick={() => toggle("Core Learning")}
                >
                  View Curriculum
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
