import { useEffect } from "react";
import { Tag } from "antd";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { motionVariants } from "config/dataConfigs";

const AboutContainer = styled.div`
  position: relative;
  background-color: #6fb8b7;

  .sub-title {
    color: ${({ theme }) => theme.colors.white};
  }

  .about {
    padding-bottom: 20px;

    h3 {
      margin-bottom: 0;
      font-weight: ${({ theme }) => theme.fontWeight.font600};
      font-size: 25px;
      color: ${({ theme }) => theme.colors.white};
    }
    h4 {
      font-weight: normal;
      color: ${({ theme }) => theme.colors.white};
      font-size: 16px;
    }
    h5 {
      font-size: 17px;
      font-weight: normal;
      color: ${({ theme }) => theme.colors.white};
      span {
        font-weight: ${({ theme }) => theme.fontWeight.font600};
        color: ${({ theme }) => theme.colors.white};
      }
    }
  }

  .about-intro {
    padding-bottom: 30px;
    line-height: 32px;
  }

  .about-tag {
    max-width: 650px;
  }
`;

const About = () => {
  const [ref, inView] = useInView();
  const control = useAnimation();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <AboutContainer id="1" className="about">
      <div className="inner">
        <div className="section contents-wrap">
          <div className="title-box">
            <motion.div
              ref={ref}
              variants={motionVariants}
              initial="hidden"
              animate={control}
            >
              <h2 className="sub-title">ABOUT ME</h2>
            </motion.div>
          </div>
          <div className="section-contents">
            <motion.div
              ref={ref}
              variants={motionVariants}
              initial="hidden"
              animate={control}
            >
              <div className="about about-intro">
                <h5>
                  <span>'끊임없이 성장하는 개발자가 되자'</span> 라는 목표를
                  가지고 달려 나가고 있는 <br />
                  프론트엔드 개발자 김한솔 입니다.
                  <br />
                  웹 퍼블리셔로 업무를 하던 중 개발에 대해 더 깊게 공부하고자
                  하는 욕심이 생겨, <br />그 길로 개발 공부를 하게 되었고 현재
                  웹 프론트엔드 개발자로 근무하며
                  <br /> 개발자로서 더 멋진 성장을 꿈꾸고 있습니다.
                </h5>
              </div>
              <div className="about-tag tag">
                <Tag>#밝은</Tag>
                <Tag>#센스있는</Tag>
                <Tag>#도전적인</Tag>
                <Tag>#부지런한</Tag>
                <Tag>#긍정적인</Tag>
                <Tag>#끈기있는</Tag>
                <Tag>#침착한</Tag>
                <Tag>#꼼꼼한</Tag>
                <Tag>#계획적인</Tag>
                <Tag>#화합적인</Tag>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </AboutContainer>
  );
};

export default About;
