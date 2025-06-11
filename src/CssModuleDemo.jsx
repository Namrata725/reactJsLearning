import style from "./CSS/cssModuleDemo.module.css";
function CssModuleDemo() {
  return (
    <div>
      <div className={style.mainCard}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbFy8dYBao7j3VKvPdgSEvn1Vly2z_02kBbQ&s"
          alt=""
          className={style.img}
        />

        <div>
          <h4>chery Tree</h4>
        </div>
      </div>
    </div>
  );
}

export default CssModuleDemo;
