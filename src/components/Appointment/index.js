import React from 'react';
import './styles.scss';

import Header from 'components/Appointment/Header';
import Show from 'components/Appointment/Show';
import Empty from 'components/Appointment/Empty';
import Form from 'components/Appointment/Form';

// custom hooks
import useVisualMode from 'hooks/useVisualMode';

// hook modes
const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = 'CREATE';


export default function Appointment(props) {

  
  const { mode , transition, back } = useVisualMode(props.interview ? SHOW : EMPTY);

  return (
    <article className='appointment'>
      <Header time={props.time} />
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)}  />}
      {mode === SHOW && <Show
        student={props.interview.student}
        interviewer={props.interview.interviewer.name}
      />}
      {mode === CREATE && <Form
        name=''
        interviewers={[]}
        interviewer={2}
        // onSave={action('onSave')}
        onCancel={() => back()}
      />}
    </article>
  );
}