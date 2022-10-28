import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notificaion } from './Notification/Notification';
import { Container } from '../utils/Container.styled';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onOptionClick = e => {
    switch (e) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return [good, neutral, bad].reduce((acc, el) => acc + el, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  const total = countTotalFeedback();
  const options = { good, neutral, bad };

  return (
    <Container>
      <h1>Feedback widget</h1>
      <Section title={'Please leave your feedback'}>
        <FeedbackOptions options={options} onLeaveFeedback={onOptionClick} />
      </Section>
      <Section title={'Statistics'}>
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notificaion
            message={'There is no feedback. Please send us your opinion!'}
          />
        )}
      </Section>
    </Container>
  );
};

// export class OldApp extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   onOptionClick = e => {
//     console.log(this.state);
//     this.setState(prevState => ({ [e]: (prevState[e] += 1) }));
//   };

//   countTotalFeedback = () => {
//     return Object.values(this.state).reduce((acc, el) => acc + el, 0);
//   };

//   countPositiveFeedbackPercentage = () => {
//     return Math.round((this.state.good / this.countTotalFeedback()) * 100);
//   };

//   render() {
//     const total = this.countTotalFeedback();
//     const { good, neutral, bad } = this.state;
//     return (
//       <Container>
//         <h1>Feedback widget</h1>
//         <Section title={'Please leave your feedback'}>
//           <FeedbackOptions
//             options={this.state}
//             onLeaveFeedback={this.onOptionClick}
//           />
//         </Section>
//         <Section title={'Statistics'}>
//           {total > 0 ? (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={total}
//               positivePercentage={this.countPositiveFeedbackPercentage()}
//             />
//           ) : (
//             <Notificaion
//               message={'There is no feedback. Please send us your opinion!'}
//             />
//           )}
//         </Section>
//       </Container>
//     );
//   }
// }
