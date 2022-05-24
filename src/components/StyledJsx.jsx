export const StyledJsx = () => {
  return (
    <>
      <div className="container">
        <p className="title">- styled JSX -</p>
        <button>FIGHT</button>
      </div>
      <style jsx="true">{`
        .container {
          border: solid 2px #392eff;
          border-radius: 8px;
        }
        .title {
          color: pink;
        }
      `}</style>
    </>
  );
};
