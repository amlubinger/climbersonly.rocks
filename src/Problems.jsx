import { useState, useEffect } from "react";
import "@aws-amplify/ui-react/styles.css";
import { API } from "aws-amplify";
import {
  Flex,
  Button,
  Heading,
  View,
  Text,
  TextField,
} from "@aws-amplify/ui-react";
import { listProblems } from "./graphql/queries";
import {
  createProblem as createProblemMutation,
  deleteProblem as deleteProblemMutation,
} from "./graphql/mutations";

export default function (props) {
  const [myProblems, setMyProblems] = useState([]);
  const [otherProblems, setOtherProblems] = useState([]);

  useEffect(() => {
    fetchProblems();
  }, []);

  async function fetchProblems() {
    const apiData = await API.graphql({ query: listProblems });
    const problemsFromAPI = apiData.data.listProblems.items;
    console.log(props.username);
    const myProblemsFromAPI = [];
    const otherProblemsFromAPI = [];
    problemsFromAPI.map((problem) => {
      problem.owner === props.username ? myProblemsFromAPI.push(problem) : otherProblemsFromAPI.push(problem);
    });
    setMyProblems(myProblemsFromAPI);
    setOtherProblems(otherProblemsFromAPI);
  }

  async function createProblem(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    const data = {
      title: form.get("title"),
      description: form.get("description"),
      grade: form.get("grade")
    };
    await API.graphql({
      query: createProblemMutation,
      variables: { input: data },
    });
    fetchProblems();
    event.target.reset();
  }

  async function deleteProblem({ id }) {
    const newProblems = problems.filter((problem) => problem.id !== id);
    setProblems(newProblems);
    await API.graphql({
      query: deleteProblemMutation,
      variables: { input: { id } },
    });
  }

  return (
    <View className="problems">
      <Heading level={2}>My Problems</Heading>
      {myProblems.length ?
        <View margin="3rem 0">
          {myProblems.map((problem) => (
            <Flex
              key={problem.id || problem.title}
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Text as="strong" fontWeight={700}>
                {problem.title}
              </Text>
              <Text as="span">{problem.description}</Text>
              <Text as="span">{problem.grade}</Text>
              <Button variation="link" onClick={() => deleteProblem(problem)}>
                Delete problem
              </Button>
            </Flex>
          ))
          }
        </View>
        :
        <Heading level={5} marginBottom="relative.medium">None</Heading>
      }
      <Heading level={2}>New Problem</Heading>
      <View as="form" margin="3rem 0" onSubmit={createProblem}>
        <Flex direction="row" justifyContent="center">
          <TextField
            name="title"
            placeholder="Problem Title"
            label="Problem Title"
            labelHidden
            variation="quiet"
            required
          />
          <TextField
            name="description"
            placeholder="Problem Description"
            label="Problem Description"
            labelHidden
            variation="quiet"
            required
          />
          <TextField
            name="grade"
            placeholder="VGrade"
            label="Problem Grade"
            labelHidden
            variation="quiet"
            required
          />
          <Button type="submit" variation="primary">
            Create Problem
          </Button>
        </Flex>
      </View>
      <Heading level={2}>Other Problems</Heading>
      {otherProblems.length ?
        <View margin="3rem 0">
          {otherProblems.map((problem) => (
            <Flex
              key={problem.id || problem.title}
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Text as="strong" fontWeight={700}>
                {problem.title}
              </Text>
              <Text as="span">{problem.description}</Text>
              <Text as="span">{problem.grade}</Text>
              <Text as="span">{problem.owner}</Text>
            </Flex>
          ))
          }
        </View>
        :
        <Heading level={5} marginBottom="relative.medium">None</Heading>
      }
    </View>
  );
}
