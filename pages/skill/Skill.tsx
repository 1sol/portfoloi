import { useEffect } from "react";
import { Progress, Tag } from "antd";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  motionVariants,
  langSkilllData,
  librarySkilllData,
  skillStrokeColor,
  tag1,
  tag2,
  tag3,
} from "config/dataConfigs";

const SkillContainer = styled.div`
  .skill-wrap {
    h3 {
      margin-bottom: 1.2rem;
      box-shadow: inset 0 -8px 0 #cb80dc78;
      width: fit-content;
      font-size: 16px;
      font-weight: ${({ theme }) => theme.fontWeight.font600};
    }

    .skill-box {
      margin-bottom: 2.7rem;

      p {
        width: 130px;
        margin: 0;
        font-size: 14px;
        font-weight: 500;
      }

      .inner {
        height: 30px;
        ${({ theme }) => theme.common.flex};
        ${({ theme }) => theme.common.flexVerticalCenter};
      }
    }
  }

  .ant-progress {
    display: flex;
    ${({ theme }) => theme.common.flexVerticalCenter};

    &-text {
      font-size: 12px;
    }
  }
`;

const Skill = () => {
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
    <SkillContainer id="3">
      <div className="inner">
        <motion.div
          ref={ref}
          variants={motionVariants}
          initial="hidden"
          animate={control}
        >
          <div className="section">
            <div className="contents-wrap">
              <div className="title-box">
                <h2 className="sub-title">Skill</h2>
              </div>
              <div className="section-contents">
                <div className="skill-wrap">
                  <h3>Language</h3>
                  <div className="skill-box">
                    {langSkilllData.map((item: any, index: any) => (
                      <div className="contents" key={index}>
                        <p>{item.name}</p>
                        <Progress
                          strokeColor={skillStrokeColor}
                          percent={item.percent}
                          status="active"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="skill-box">
                    <h3>Library</h3>
                    {librarySkilllData.map((item: any, index: any) => (
                      <div className="contents" key={index}>
                        <p>{item.name}</p>
                        <Progress
                          strokeColor={skillStrokeColor}
                          percent={item.percent}
                          status="active"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="skill-box">
                    <div className="contents">
                      <h3>Framework</h3>
                      <p>React Native</p>
                      <Progress
                        strokeColor={skillStrokeColor}
                        percent={70}
                        status="active"
                      />
                    </div>
                  </div>

                  <div className="skill-box tag">
                    <h3>Version Control</h3>
                    {tag1.map((item: any, index: any) => (
                      <Tag key={index}>{item}</Tag>
                    ))}
                  </div>
                  <div className="skill-box">
                    <h3>Cooperation/Communication Tool</h3>
                    {tag2.map((item: any, index: any) => (
                      <Tag key={index}>{item}</Tag>
                    ))}
                  </div>
                  <div className="skill-box">
                    <h3>Cloud</h3>
                    {tag3.map((item: any, index: any) => (
                      <Tag key={index}>{item}</Tag>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SkillContainer>
  );
};

export default Skill;
