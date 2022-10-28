import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notificaion } from './Notification/Notification';
import { Container } from '../utils/Container.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onOptionClick = e => {
    console.log(this.state);
    this.setState(prevState => ({ [e]: (prevState[e] += 1) }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, el) => acc + el, 0);
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    const total = this.countTotalFeedback();
    const { good, neutral, bad } = this.state;
    return (
      <Container>
        <h1>Feedback widget</h1>
        <Section title={'Please leave your feedback'}>
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.onOptionClick}
          />
        </Section>
        <Section title={'Statistics'}>
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notificaion
              message={'There is no feedback. Please send us your opinion!'}
            />
          )}
        </Section>
      </Container>
    );
  }
}
