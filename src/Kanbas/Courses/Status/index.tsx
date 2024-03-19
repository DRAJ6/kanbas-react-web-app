import {
    FaBan,
    FaBell,
    FaBullhorn,
    FaCalendarCheck,
    FaCalendarDay,
    FaChartBar,
    FaCheckCircle,
    FaFileImport, FaMinus,
    FaPlus,
    FaRegArrowAltCircleRight,
    FaRegDotCircle, FaUndo
} from "react-icons/fa";
import "./index.css";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { courses } from "../../Database";
import {FaTicket} from "react-icons/fa6";

function Status() {
    const [isUnpubBtnDisabled, setUnpubBtn] = useState(false);
    const [isPubBtnDisabled, setPubBtn] = useState(false);
    const { courseId } = useParams();
    const course = courses.find((course) => course._id === courseId);
    
    // Function to change color and enable/disable unpublish and pubish buttons depending on which one is clicked.
    function changePublish(str: string) {
        let unpub_element= document.getElementById("unpublishbtn");
        let pub_element = document.getElementById("publishbtn");

        if (str.localeCompare("unpub")) {
            if (unpub_element!== null && pub_element !== null) {
                pub_element.classList.toggle("wd-enabled-btn");
                unpub_element.classList.remove("wd-enabled-btn");
                setPubBtn(true);
                setUnpubBtn(false);
            }
        } else {
            if (unpub_element!== null && pub_element !== null) {
                pub_element.classList.remove("wd-enabled-btn");
                unpub_element.classList.toggle("wd-enabled-btn");
                setPubBtn(false);
                setUnpubBtn(true);
            }
        }
    }

    return(
        <>
            {/*<h3>Course Status</h3>*/}

            <div className="d-grid gap-1 d-md-flex mx-auto">
                <button id="unpublishbtn" className="btn-light btn-outline-dark wd-course-status-button" type="button" disabled={isUnpubBtnDisabled} onClick={() => changePublish("unpub")}><FaUndo /> Revert</button>
                <button id="publishbtn" className="btn-light btn-outline-dark wd-course-status-button" type="button" disabled={isPubBtnDisabled} onClick={() => changePublish("pub")}><FaCheckCircle /> Publish</button>
            </div>

            <p></p>

            <div className="d-grid gap-1 mx-auto">
                <button className="btn btn-light btn-outline-dark wd-status-btn" type="button"><FaFileImport /> Import Existing Content</button>
                <button className="btn btn-light btn-outline-dark wd-status-btn" type="button"><FaRegArrowAltCircleRight /> Import From Commons</button>
                <button className="btn btn-light btn-outline-dark wd-status-btn" type="button"><FaRegDotCircle /> Choose Home Page</button>
                <button className="btn btn-light btn-outline-dark wd-status-btn" type="button"><FaChartBar /> View Course Stream</button>
                <button className="btn btn-light btn-outline-dark wd-status-btn" type="button"><FaBullhorn /> New Announcement</button>
                <button className="btn btn-light btn-outline-dark wd-status-btn" type="button"><FaChartBar /> New Analytics</button>
                <button className="btn btn-light btn-outline-dark wd-status-btn" type="button"><FaBell /> View Course Notifications</button>
            </div>

            <p></p>

            <div className="row">
                <div className="col">
                    <h3>To Do</h3>
                </div>
            </div>
            <div className="row"><hr/></div>
            <div className="row wd-coming-up-todo-row">
                <Link to={`/Kanbas/Courses/${course?._id}/Grades`} className="wd-hyperlinks"><FaCalendarCheck /> HomeWork 1 - DataPipeline</Link>
                <p className="wd-subheader-to-do">100 points • March 25 at 11:59pm</p>
            </div>

            <p></p>

            <div className="row">
                <div className="col">
                    <h3>Coming Up</h3>
                </div>
                <div className="col">
                    <h6>
                        <Link to={`/Kanbas/Calendar`} className="wd-hyperlinks"><FaCalendarDay /> Calendar</Link>
                    </h6>
                </div>
            </div>
            <div className="row"><hr/></div>
            <div className="row wd-coming-up-todo-row">
                <Link to={`/Kanbas/Calendar`} className="wd-hyperlinks"><FaCalendarDay />Exam</Link>
                <p className="wd-subheader-coming-up">CS6240 Exam April 4th at 11:50am</p>
            </div>
            <div className="row wd-coming-up-todo-row">
                <Link to={`/Kanbas/Calendar`} className="wd-hyperlinks"><FaCalendarDay />IE7374 Project Scoping</Link>
                <p className="wd-subheader-coming-up">IE7374 Grading March 25th at 6:00 pm</p>
            </div>
            <div className="row wd-coming-up-todo-row">
            <Link to={`/Kanbas/Calendar`} className="wd-hyperlinks"><FaCalendarDay />Orientation</Link>
                <p className="wd-subheader-coming-up">F1-Orientation July 15 at 9:00 am</p>
            </div>


        </>
    );
}
export default Status