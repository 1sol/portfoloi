import { useState, useEffect } from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  position: fixed;
  width: 100%;
  z-index: 10;

  .header-wrap {
    padding: 20px 15px;
    transition: all 0.2s ease-in-out;

    ul {
      ${({ theme }) => theme.common.flexAlignCenter};
      margin: 0;

      li {
        width: calc(100% / 5);
        ${({ theme }) => theme.align.center};

        a {
          color: ${({ theme }) => theme.colors.black};
          transition: all 0.3s ease-in-out;
          font-size: 16px;
        }
        :hover a {
          color: #6fb8b7;
        }
      }
    }

    .menu {
      display: none;

      button {
        display: block;
        width: 25px;
        height: 19px;
        position: relative;
        cursor: pointer;
        z-index: 999;
      }
      span {
        display: block;
        position: absolute;
        right: 0;
        width: 100%;
        height: 3px;
        border-radius: 15px;
        background-color: ${({ theme }) => theme.colors.black};
        transition: all 0.3s ease-in-out;

        &:first-child {
          top: 0;
        }
        &:nth-child(2) {
          top: 50%;
          width: 70%;
          transform: translateY(-50%);
        }
        &:last-child {
          bottom: 0;
        }
      }

      .open {
        span {
          background-color: ${({ theme }) => theme.colors.white};
          &:first-child {
            top: 50%;
            transform: translateY(-50%) rotate(45deg);
          }
          &:nth-child(2) {
            opacity: 0;
          }
          &:last-child {
            bottom: 50%;
            transform: translateY(50%) rotate(-45deg);
          }
        }
      }
    }

    @media ${({ theme }) => theme.device.desktop} {
      nav {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 0;
        background: ${({ theme }) => theme.colors.black};
        overflow: hidden;
        z-index: 990;
        transition: all 0.3s ease-in 0.2s;
        ul {
          display: none;
        }
      }

      nav.open {
        height: 100%;
        ul {
          display: flex;
          width: 100%;
          flex-direction: column;
          padding: 150px 0;

          li {
            margin-bottom: 1.5rem;
            a {
              &::before {
                transition-duration: 0s;
              }
              transition: 0s;
              font-size: 25px;
              font-weight: ${({ theme }) => theme.fontWeight.bold};
              color: ${({ theme }) => theme.colors.white};
            }
          }
        }
      }

      .menu {
        ${({ theme }) => theme.common.flex};
        ${({ theme }) => theme.common.flexEnd};
      }
    }
  }

  .header-wrap.scroll {
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: 0 2px 20px 0 rgb(0 0 0 / 5%);
  }

  .ant-tabs-nav-wrap {
    ${({ theme }) => theme.common.flexHorizontalCenter};
  }

  .ant-tabs-content {
    ${({ theme }) => theme.common.flexAlignCenter};
  }

  .ant-col {
    text-align: center;
  }

  .ant-col-6 {
    ${({ theme }) => theme.align.center};
    line-height: 48px;
  }
`;

const Header = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const handleClickMenu = () => {
    setIsVisible(!isVisible);
  };

  const handleScroll = () => {
    const { pageYOffset } = window;
    const deltaY = pageYOffset - 50;

    if (pageYOffset !== 0 && deltaY >= 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <HeaderContainer>
      <div className={`header-wrap${isScrolled ? " scroll" : ""}`}>
        <div className="menu">
          <button
            onClick={handleClickMenu}
            className={`${isVisible ? "open" : ""}`}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <nav className={`${isVisible ? "open" : ""}`}>
          <ul>
            <li>
              <a href="0">HOME</a>
            </li>
            <li>
              <a href="1">ABOUT</a>
            </li>
            <li>
              <a href="2">TIMELINE</a>
            </li>
            <li>
              <a href="3">SKILL</a>
            </li>
            <li>
              <a href="4">PROJECT</a>
            </li>
          </ul>
        </nav>
      </div>
    </HeaderContainer>
  );
};

export default Header;
