const pixelPerfect = () => (
  <svg
    width="32"
    height="40"
    viewBox="0 0 32 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 0L0 6V18.18C0 28.28 6.82 37.7 16 40C25.18 37.7 32 28.28 32 18.18V6L16 0ZM28 18.18C28 26.18 22.9 33.58 16 35.84C9.1 33.58 4 26.2 4 18.18V8.62L16 4.38L28 8.62V18.18ZM9.64 17.18L6.8 20L13.88 27.08L25.2 15.76L22.38 12.94L13.9 21.42L9.64 17.18Z"
      fill="#7D4AEA"
    />
  </svg>
);

const conversationReady = () => (
  <svg
    width="32"
    height="44"
    viewBox="0 0 32 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.9999 10V16L23.9999 8L15.9999 0V6C13.1382 5.995 10.3276 6.75897 7.86223 8.21202C5.39681 9.66508 3.36708 11.7538 1.98528 14.2599C0.603478 16.7659 -0.0796301 19.5972 0.00738705 22.4576C0.0944042 25.3181 0.94835 28.1026 2.47993 30.52L5.39993 27.6C4.4745 25.8789 3.99329 23.9541 3.99993 22C4.0024 18.8182 5.26747 15.7674 7.51738 13.5174C9.76728 11.2675 12.8181 10.0025 15.9999 10ZM29.5199 13.48L26.5999 16.4C27.5704 18.227 28.0513 20.2742 27.9956 22.3422C27.94 24.4103 27.3498 26.4286 26.2824 28.2008C25.2151 29.973 23.707 31.4386 21.9051 32.4549C20.1031 33.4711 18.0687 34.0035 15.9999 34V28L7.99993 36L15.9999 44V38C18.8617 38.005 21.6722 37.241 24.1376 35.788C26.603 34.3349 28.6328 32.2462 30.0146 29.7401C31.3964 27.2341 32.0795 24.4028 31.9925 21.5424C31.9054 18.6819 31.0515 15.8974 29.5199 13.48Z"
      fill="#7D4AEA"
    />
  </svg>
);

const modernUseful = () => (
  <svg
    width="44"
    height="42"
    viewBox="0 0 44 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M44 20.98L39.12 15.4L39.8 8.02L32.58 6.38L28.8 0L22 2.92L15.2 0L11.42 6.38L4.2 8L4.88 15.4L0 20.98L4.88 26.56L4.2 33.96L11.42 35.6L15.2 42L22 39.06L28.8 41.98L32.58 35.6L39.8 33.96L39.12 26.58L44 20.98ZM36.1 23.94L34.98 25.24L35.14 26.94L35.5 30.84L31.7 31.7L30.02 32.08L29.14 33.56L27.16 36.92L23.6 35.38L22 34.7L20.42 35.38L16.86 36.92L14.88 33.58L14 32.1L12.32 31.72L8.52 30.86L8.88 26.94L9.04 25.24L7.92 23.94L5.34 21L7.92 18.04L9.04 16.74L8.86 15.02L8.5 11.14L12.3 10.28L13.98 9.9L14.86 8.42L16.84 5.06L20.4 6.6L22 7.28L23.58 6.6L27.14 5.06L29.12 8.42L30 9.9L31.68 10.28L35.48 11.14L35.12 15.04L34.96 16.74L36.08 18.04L38.66 20.98L36.1 23.94Z"
      fill="#7D4AEA"
    />
  </svg>
);




const Conversation = () => {
  return (
    <div className="conversation_container">
      <h3>
        Conversion {"&"} UX ready popups {"&"} modals
      </h3>
      <div className="conversation_row">
        <div>
          <div>{pixelPerfect()}</div>
          <h4>Pixel Perfect</h4>
          <p>
            Helps you calculate your email marketing roi to measure success.
          </p>
        </div>
        <div>
          <div>{conversationReady()}</div>
          <h4>Conversation Ready</h4>
          <p>
            {" "}
            Empowers your emails by generating afree code for a CTA in your
            subject line.
          </p>
        </div>
        <div>
          <div>{modernUseful()}</div>
          <h4>Modern{"&"}Useful</h4>
          <p>
            {" "}
            Enables you to estimate the total profit of your investment on a
            popup service.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Conversation;
