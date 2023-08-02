import { FC } from 'react';

const Image: FC<{ color?: string }> = ({ color = '#8695BC' }) => (
  <svg
    width="26"
    height="22"
    viewBox="0 0 26 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18 7.5C18 7.89782 17.842 8.27936 17.5607 8.56066C17.2794 8.84196 16.8978 9 16.5 9C16.1022 9 15.7206 8.84196 15.4393 8.56066C15.158 8.27936 15 7.89782 15 7.5C15 7.10218 15.158 6.72064 15.4393 6.43934C15.7206 6.15804 16.1022 6 16.5 6C16.8978 6 17.2794 6.15804 17.5607 6.43934C17.842 6.72064 18 7.10218 18 7.5ZM26 2V18V20C26 20.5304 25.7893 21.0391 25.4142 21.4142C25.0391 21.7893 24.5304 22 24 22H2C1.46957 22 0.960859 21.7893 0.585786 21.4142C0.210714 21.0391 0 20.5304 0 20V16V2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0H24C24.5304 0 25.0391 0.210714 25.4142 0.585786C25.7893 0.960859 26 1.46957 26 2ZM24 15.5875V2H2V13.5875L6.5875 9C6.96403 8.629 7.4714 8.42103 8 8.42103C8.5286 8.42103 9.03597 8.629 9.4125 9L15 14.5875L17.5875 12C17.964 11.629 18.4714 11.421 19 11.421C19.5286 11.421 20.036 11.629 20.4125 12L24 15.5875Z"
      fill={color}
    />
  </svg>
);

export default Image;
