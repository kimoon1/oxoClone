const PRIMARY_COLOR_LIGHT = '#b0b0b0';

export default function OxIconLined({
  color = PRIMARY_COLOR_LIGHT,
  width = 20,
  height = 10,
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 20 10'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M4.5 9C6.70914 9 8.5 7.20914 8.5 5C8.5 2.79086 6.70914 1 4.5 1C2.29086 1 0.5 2.79086 0.5 5C0.5 7.20914 2.29086 9 4.5 9Z'
        stroke={color}
      />
      <path
        d='M17.0995 1.3979L17.4556 1.74889L17.4556 1.74889L17.0995 1.3979ZM15.5 3.02066L15.1439 3.37165L15.5 3.73293L15.8561 3.37165L15.5 3.02066ZM13.9005 1.39788L14.2566 1.04689L14.2566 1.04689L13.9005 1.39788ZM12.0069 3.319L12.363 2.96801L12.363 2.96801L12.0069 3.319ZM13.6064 4.94179L13.9625 5.29278L14.3085 4.94179L13.9625 4.5908L13.6064 4.94179ZM11.8922 6.68099L11.5361 6.33L11.5361 6.33L11.8922 6.68099ZM13.7857 8.60212L13.4296 8.25113L13.4296 8.25113L13.7857 8.60212ZM15.5 6.86291L15.8561 6.51192L15.5 6.15064L15.1439 6.51192L15.5 6.86291ZM17.3936 4.94179L17.0375 4.5908L16.6915 4.94179L17.0375 5.29278L17.3936 4.94179ZM18.9931 3.31902L18.637 2.96803L18.637 2.96803L18.9931 3.31902ZM17.4556 1.74889C17.7827 1.41706 18.3099 1.41706 18.637 1.74889L19.3492 1.04691C18.6304 0.317723 17.4621 0.317723 16.7434 1.04691L17.4556 1.74889ZM15.8561 3.37165L17.4556 1.74889L16.7434 1.04691L15.1439 2.66967L15.8561 3.37165ZM13.5444 1.74887L15.1439 3.37165L15.8561 2.66967L14.2566 1.04689L13.5444 1.74887ZM12.363 1.74887C12.6901 1.41704 13.2173 1.41704 13.5444 1.74887L14.2566 1.04689C13.5379 0.317704 12.3696 0.317704 11.6508 1.04689L12.363 1.74887ZM12.363 2.96801C12.032 2.63217 12.032 2.08471 12.363 1.74887L11.6508 1.04689C10.9361 1.77205 10.9361 2.94483 11.6508 3.67L12.363 2.96801ZM13.9625 4.5908L12.363 2.96801L11.6508 3.67L13.2503 5.29278L13.9625 4.5908ZM12.2483 7.03199L13.9625 5.29278L13.2503 4.5908L11.5361 6.33L12.2483 7.03199ZM12.2483 8.25113C11.9172 7.91529 11.9172 7.36783 12.2483 7.03199L11.5361 6.33C10.8213 7.05517 10.8213 8.22795 11.5361 8.95311L12.2483 8.25113ZM13.4296 8.25113C13.1026 8.58296 12.5753 8.58296 12.2483 8.25113L11.5361 8.95311C12.2548 9.6823 13.4231 9.6823 14.1418 8.95311L13.4296 8.25113ZM15.1439 6.51192L13.4296 8.25113L14.1418 8.95311L15.8561 7.2139L15.1439 6.51192ZM17.5704 8.25111L15.8561 6.51192L15.1439 7.2139L16.8582 8.95309L17.5704 8.25111ZM18.7517 8.25111C18.4247 8.58294 17.8974 8.58294 17.5704 8.25111L16.8582 8.95309C17.5769 9.68228 18.7452 9.68228 19.4639 8.95309L18.7517 8.25111ZM18.7517 7.03197C19.0828 7.36781 19.0828 7.91527 18.7517 8.25111L19.4639 8.95309C20.1787 8.22793 20.1787 7.05515 19.4639 6.32999L18.7517 7.03197ZM17.0375 5.29278L18.7517 7.03197L19.4639 6.32999L17.7497 4.5908L17.0375 5.29278ZM18.637 2.96803L17.0375 4.5908L17.7497 5.29278L19.3492 3.67001L18.637 2.96803ZM18.637 1.74889C18.968 2.08473 18.968 2.63219 18.637 2.96803L19.3492 3.67001C20.0639 2.94485 20.0639 1.77207 19.3492 1.04691L18.637 1.74889Z'
        fill={color}></path>
    </svg>
  );
}
