import React, { useState } from 'react';

import InterviewerListItem from './InterviewerListItem';

import 'components/InterviewerList.scss';

export default function InterviewerList(props) {

  // [interviewer, setInterviewer] = useState('3');

  const interviewers = props.interviewers.map(interviewer => 
    <InterviewerListItem
      key={interviewer.id}
      // id={interviewer.id}
      name={interviewer.name}
      avatar={interviewer.avatar}
      selected={props.value === interviewer.id}
      setInterviewer={() => props.onChange(interviewer.id)}
      />
    );

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">
        {interviewers}
      </ul>
    </section>

  );
}