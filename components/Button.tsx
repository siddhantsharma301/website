import styled from 'styled-components';
import {
  padding,
  color,
  layout,
  variant,
  compose,
  PaddingProps,
  ColorProps,
  LayoutProps,
} from 'styled-system';

interface ButtonProps {
    variant?: 'primary' | 'secondary'
}

const Button = styled.button<
    ButtonProps & PaddingProps & ColorProps & LayoutProps
>`
    font-size: 1rem;
    line-height: 1.5rem;
    margin: 0;
    display: inline-block;
    font-weight: bold;
    align-items: center;
    justify-content: center;
    padding: 18px 50px;
    border-radius: 12px;
    cursor: pointer;
    border: none;
    transition: ease-in-out 0.15s;
    outline: 0;
    color: white;

    ${compose(padding, color, layout)}

    ${variant({
        variants: {
            primary: {
                color: 'white',
                backgroundColor: 'rgb(116, 161, 248)',
                '&:hover': {
                color: 'white',
                backgroundColor: 'black',
                transform: 'scale(1.04)',
                },
            },
            secondary: {
                color: 'black',
                backgroundColor: '#f5f6fa',
                '&:hover': {
                color: 'white',
                backgroundColor: 'black',
                transform: 'scale(1.04)',
                },
            },
        },
      })};
`;

Button.defaultProps = {
    variant: 'primary',
};

export default Button;
