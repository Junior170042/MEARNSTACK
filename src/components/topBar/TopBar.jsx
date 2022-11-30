import "./TopBar.css";

export const TopBar = () => {
  return (
    <>
      <div className="top">
        <div className="topLeft">
          <i className="leftIcon fa-brands fa-square-facebook"></i>
          <i className="leftIcon fa-brands fa-square-twitter"></i>
          <i className="leftIcon fa-brands fa-square-pinterest"></i>
          <i className="leftIcon fa-brands fa-square-instagram"></i>
        </div>
        <div className="topCenter">
          <ul className="topList">
            <li className="topListItem">Home</li>
            <li className="topListItem">About</li>
            <li className="topListItem">Contact</li>
            <li className="topListItem">Write</li>
            <li className="topListItem">Logout</li>
          </ul>
        </div>
        <div className="topRight">
          <img
            className="profileImg "
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTN9TaGrF3qmBtBoXN5TaTdijk8dUfq2z7w6a-QjVoEjtxv2f2IcWph0-e7avSfpgTjdg&usqp=CAU"
            alt="Profile"
          />
          <i className=" searchIcon fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
    </>
  );
};
