import { useEffect } from "react";
import { List, Timeline } from "antd";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import {
  educationData,
  historyData,
  licenseData,
  motionVariants,
} from "config/dataConfigs";

const HistoryContainer = styled.div`
  position: relative;

  .section-contents {
    width: calc(100% - 400px);
  }

  .sub-title {
    line-height: 1;
  }

  .history-item {
    padding-bottom: 25px;

    h3 {
      margin-bottom: 5px;
      font-weight: ${({ theme }) => theme.fontWeight.font600};
      font-size: 25px;
    }
    h4 {
      font-weight: normal;
      font-size: 16px;
    }
    h5 {
      font-size: 17px;
      font-weight: normal;
      span {
        font-weight: ${({ theme }) => theme.fontWeight.font600};
      }
    }
  }

  .timeline {
    p {
      font-weight: ${({ theme }) => theme.fontWeight.font500};
      font-size: 17px;
    }
    span {
      display: block;
      margin-top: 5px;
      font-size: 14px;
      font-weight: ${({ theme }) => theme.fontWeight.font400};
      color: ${({ theme }) => theme.colors.darkGray};
    }
  }
`;

const History = () => {
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
    <HistoryContainer id="2" className="history">
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
                <h2 className="sub-title">HISTORY</h2>
              </div>
              <div className="section-contents">
                <div>
                  <div className="history-item">
                    <h3>EDUCATION</h3>
                    <List
                      itemLayout="horizontal"
                      dataSource={educationData}
                      renderItem={(item) => (
                        <List.Item>
                          <List.Item.Meta title={item.title} />
                        </List.Item>
                      )}
                    />
                  </div>
                  <div className="history-item">
                    <h3>LICENSE</h3>
                    <List
                      itemLayout="horizontal"
                      dataSource={licenseData}
                      renderItem={(item) => (
                        <List.Item>
                          <List.Item.Meta title={item.title} />
                        </List.Item>
                      )}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="timeline">
              <Timeline>
                {historyData.map((item, index) => (
                  <Timeline.Item label={item.label} key={index}>
                    <p>
                      {item.title}
                      <span>{item.subTitle}</span>
                    </p>
                  </Timeline.Item>
                ))}
              </Timeline>
            </div>
          </div>
        </motion.div>
      </div>
    </HistoryContainer>
  );
};

export default History;
