import { Box, Heading, Progress } from "@chakra-ui/react";
import React, { useState } from "react";
import axios from "axios";
import { updateUserInfoAxios } from "../lib/apiFuncrtionality";
import First from "../components/FormQuestions.jsx/First";
import Second from "../components/FormQuestions.jsx/Second";
import Third from "../components/FormQuestions.jsx/Third";
import Fourth from "../components/FormQuestions.jsx/Fourth";
import Fifth from "../components/FormQuestions.jsx/Fifth";
import Sixth from "../components/FormQuestions.jsx/Sixth";
import Seventh from "../components/FormQuestions.jsx/Seventh";
import Heighth from "../components/FormQuestions.jsx/Heighth";
import Ninth from "../components/FormQuestions.jsx/Ninth";
import Tenth from "../components/FormQuestions.jsx/Tenth";
import Eleventh from "../components/FormQuestions.jsx/Eleventh";
import './GraphPage.css'
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../contexts/userContext";

export default function Form() {
  const [formData, setFormData] = useState({});
  const [question, setQuestion] = useState(0);
  const [isLastQClicked, setIsLastQClicked] = useState(false);
  const { userDetails, setUserDetails, setIsUserLogged } = useUserContext();
const navigate = useNavigate()

  const handleChange = async (e) => {
    const tempFormData = { ...formData };
    tempFormData[e.target.name] = e.target.value;
    console.log(tempFormData)
    setFormData(tempFormData);
  };
console.log(isLastQClicked)
   

  const handleSubmit = async () => {
    const res = await axios.get('http://ec2-3-72-250-109.eu-central-1.compute.amazonaws.com:8080/score', {params:{ ...formData}}, {withCredentials: true});
    console.log(res.data)
    updateUserInfo(res.data);
    if (res) {
      setUserDetails(res.data)
      navigate("/dashboard")
      return res.data;
    } 
    // http://172.16.0.146:8080
  };

  const componentList = [
    <First
      handleChange={handleChange}
      question={question}
      setQuestion={setQuestion}
    />,
    <Second
      handleChange={handleChange}
      question={question}
      setQuestion={setQuestion}
    />,
    <Third
      handleChange={handleChange}
      question={question}
      setQuestion={setQuestion}
    />,
    <Fourth
      handleChange={handleChange}
      question={question}
      setQuestion={setQuestion}
    />,
    <Fifth
      handleChange={handleChange}
      question={question}
      setQuestion={setQuestion}
    />,
    <Sixth
      handleChange={handleChange}
      question={question}
      setQuestion={setQuestion}
    />,
    <Seventh
      handleChange={handleChange}
      question={question}
      setQuestion={setQuestion}
    />,
    <Heighth
      handleChange={handleChange}
      question={question}
      setQuestion={setQuestion}
    />,
    <Ninth
      handleChange={handleChange}
      question={question}
      setQuestion={setQuestion}
    />,
    <Tenth
      handleChange={handleChange}
      question={question}
      setQuestion={setQuestion}
    />,
    <Eleventh
      handleChange={handleChange}
      question={question}
      setQuestion={setQuestion}
      handleSubmit={handleSubmit}
      isLastQClicked={isLastQClicked}
      setIsLastQClicked={setIsLastQClicked}
    />,
  ];

  const updateUserInfo = async (data) => {
    console.log(data)
    const res = await updateUserInfoAxios({
      info: {
        fico: data.fico, questions: { ...formData }, data: data
      }
    });
    console.log("update is...", res);
    return res;
  }


  // useEffect(() => {
  //   console.log('piet')
  //   updateUserInfo();
  // }, [])

  
  return (
    <>
      <Heading align="center" mt="3rem">
        Fill this questionnaire for more information
      </Heading>

      <Box mx="20%">
        <Progress
          my="3rem"
          borderRadius="10px"
          color="#3DE6B9"
          size="lg"
          value={
            question === 1
              ? "10"
              : question === 2
              ? "20"
              : question === 3
              ? "30"
              : question === 4
              ? "40"
              : question === 5
              ? "50"
              : question === 6
              ? "60"
              : question === 7
              ? "70"
              : question === 8
              ? "80"
              : question === 9
              ? "90"
              : question === 10
              ? "100"
              : "0"
          }
        />

        <div>{componentList[question]}</div>
      </Box>
    </>
  );
}
