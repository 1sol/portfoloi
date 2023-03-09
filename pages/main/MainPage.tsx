import styled from "styled-components";
import { motion } from "framer-motion";
import Layout from "@components/container";
import About from "../about";
import History from "../history";
import Skill from "../skill";
import Project from "../project";

const Main = styled.div``;

const Intro = styled.div`
  background-color: #6fb8b72b;

  .section {
    min-height: 100vh;
    ${({ theme }) => theme.common.flexAlignCenter};
    ${({ theme }) => theme.common.flexColumn};
  }

  .section-intro {
    background-color: ${({ theme }) => theme.colors.black};
    width: 300px;
    height: 300px;
    border-radius: 50%;
    ${({ theme }) => theme.common.flexAlignCenter};
    text-align: center;
  }

  .title {
    font-size: 30px;
    font-weight: bold;
    color: #fff;
  }
`;

const MainPage = () => {
  return (
    <Layout>
      <Main>
        <Intro id="0">
          <div className="section">
            <motion.div
              animate={{ scale: [1, 1.5, 1.1] }}
              transition={{ duration: 3, times: [0, 0.2, 1] }}
            >
              <div className="section-intro">
                <h1 className="title">
                  FrontEnd <br /> Developer <br />
                  HANSOL KIM.
                </h1>
              </div>
            </motion.div>
          </div>
        </Intro>

        <About />
        <History />
        <Project />
        <Skill />
      </Main>
    </Layout>
  );
};

export default MainPage;
