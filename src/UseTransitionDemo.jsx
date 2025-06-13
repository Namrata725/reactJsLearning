import { startTransition, useState, useTransition } from "react";

function UserTransitionDemo() {
  //using state

  const [pendingState, setPendingState] = useState(false);
  const handleButtonState = async () => {
    setPendingState(true);

    await new Promise((res) => setTimeout(res, 2000));
    setPendingState(false);
  };

  const [pendingTransition, setPendingTransition] = useTransition();
  const handlePendingTransition = () => {
    setPendingTransition(async () => {
      await new Promise((res) => setTimeout(res, 2000));
    });
  };

  return (
    <div>
      <h4>UseTransition hook in react js</h4>

      <button disabled={pendingState} onClick={handleButtonState}>
        {pendingState ? "submitting" : "Submit using state"}
      </button>
      <button disabled={pendingTransition} onClick={handlePendingTransition}>
        {pendingTransition ? (
          <img
            src="https://res.cloudinary.com/bytesizedpieces/image/upload/v1656084931/article/a-how-to-guide-on-making-an-animated-loading-image-for-a-website/animated_loader_gif_n6b5x0.gif"
            style={{ width: "200px" }}
          />
        ) : (
          "Submit using UseTransition"
        )}
      </button>
    </div>
  );
}

export default UserTransitionDemo;
