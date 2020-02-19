import React from "react";
import { connect } from "react-redux";
import { withNavigation } from "react-navigation";
import { View } from "react-native";
import Choice from "../components/Choice";
import QuestionMeta from "./QuestionMeta";
import QuestionHeader from "../components/QuestionHeader";
import { RowItem, ColItem } from "../Layouts/Wrappers";

const Question = props => {
  const { ID, question, answers, choice, usersInfo, metaData } = props.q;

  return (
    <RowItem>
      <ColItem>
        <QuestionHeader question={props.q} />
        <View>
          {answers.map((answer, index) => (
            <Choice
              key={index}
              ID={ID}
              answer={answer}
              choice={choice}
              index={index}
            />
          ))}
        </View>
        <QuestionMeta metaData={metaData} questionID={ID} />
      </ColItem>
    </RowItem>
  );
};

const mapStateToProps = state => {
  return {
    loggedInUser: state.loggedInUser
  };
};

export default connect(mapStateToProps)(withNavigation(Question));
