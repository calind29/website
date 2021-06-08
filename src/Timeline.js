import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import "./Timeline.css"

const Timeline = () => {
    return (
        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                //contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                //ontentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="2018 - 2023"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                //icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title">Kommunikasjonsteknologi og digital sikkerhet, Norges teknisk-naturvitenskaplige universitet</h3>
                <h4 className="vertical-timeline-element-subtitle">Trondheim, Norge</h4>
                <p>
                IT, hacking og steking
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                //contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                //contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="2021 - 2023"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                //icon={<SchoolIcon />}
            >
                <h3 className="vertical-timeline-element-title">Samfunnsøkonomi, Norges teknisk-naturvitenskaplige universitet</h3>
                <h4 className="vertical-timeline-element-subtitle">Certification</h4>
                <p>
                    Leke litt med økonomi på si!
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                //contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                //contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="2021 - present"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                //icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title">medlem backup</h3>
                <h4 className="vertical-timeline-element-subtitle">Trondheim, Norge</h4>
                <p>
                    Pensonist som vil fortsette å engasjere seg😎
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                //contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                //contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="2021 - present"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                //icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title">Medlem Jubileumsstyret</h3>
                <h4 className="vertical-timeline-element-subtitle">Trondheim, Norge</h4>
                <p>
                    Abakus blir 45! Må jo feires
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                //contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                //contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="2020 - 2020"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                //icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title">If skadeforsikring</h3>
                <h4 className="vertical-timeline-element-subtitle">Oslo, Norge></h4>
                <p>
                    Jobbe med litt poliseresystemer
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                //contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                //ontentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="2020 - 2021"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                //icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title">Leder LaBamba</h3>
                <h4 className="vertical-timeline-element-subtitle">Trondheim, Norge</h4>
                <p>
                    Styrte Norges beste studentkjeller!
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                //contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                //contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="2018-2019"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                //icon={<SchoolIcon />}
            >
                <h3 className="vertical-timeline-element-title">Dalfører, UKA19</h3>
                <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
                <p>
                    Dal må bygges og rives
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                //contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                //contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="2016 - 2018"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                //icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title">Bedriftsøkonomi, Handelshøyskolen BI</h3>
                <h4 className="vertical-timeline-element-subtitle">Oslo, Norge</h4>
                <p>
                    Måtte jo fylle to semestre
                </p>
            </VerticalTimelineElement>
        </VerticalTimeline>
    );
};

export default Timeline;