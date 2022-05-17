import React, {useState} from "react";

export default function CenterForum() {
  const [liked, setLiked] = useState(true);

  return (
    <div className="col-8">
      <div className="d-flex m-3 mt-4">
        <img
          src="https://static.thenounproject.com/png/42025-200.png"
          className="i-5"
        />
        <div class="input-group input-group-lg">
          <input
            type="text"
            class="form-control px-5"
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
            placeholder="What are you thinking right now?"
          />
        </div>
      </div>

      <div className="white-b p-3 mt-5">
        <div className="post-header d-flex justify-content-between">
          <div className="d-flex ">
            <img
              src="https://i.pinimg.com/custom_covers/222x/85498161615209203_1636332751.jpg"
              className="i-5 mx-2"
            />
            <div className="flex-column">
              <a href="#">Vidushi Singla</a>
              <div>9h ago</div>
            </div>
          </div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/61/61140.png"
            className="i-4"
          />
        </div>
        <img
          className="img- pt-4 mx-2"
          src="https://www.theparisreview.org/blog/wp-content/uploads/2019/08/happytogether-1600x900-c-default.jpg"
        />
        <hr />
        <div className="d-flex justify-content-between align-item-baseline neg-mar">
          <div className="d-flex">
            <img
               onClick={() => setLiked(prevMode => !prevMode)}
               src={liked ? "https://icones.pro/wp-content/uploads/2021/04/icone-noire-noir.png" : "https://image.similarpng.com/very-thumbnail/2020/06/Icon-like-button-transparent-PNG.png"}
              className="like mx-2"
            />
            <div className="like-t pt-2">Like</div>
          </div>

          <div className="d-flex">
            <img
              src="https://cdn2.iconfinder.com/data/icons/medical-healthcare-26/28/Chat-2-512.png"
              className="pt-2 comment"
            />
            <div className="like-t pt-2">Comment</div>
          </div>
        </div>
        <hr />
      </div>

      <div className="white-b p-3 mt-5">
        <div className="post-header d-flex justify-content-between">
          <div className="d-flex ">
            <img
              src="https://i.pinimg.com/474x/86/ea/e3/86eae3d8abc2362ad6262916cb950640.jpg"
              className="i-5 mx-2"
            />
            <div className="flex-column">
              <a href="#">Deeksha Joshi</a>
              <div>9h ago</div>
            </div>
          </div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/61/61140.png"
            className="i-4"
          />
        </div>
        <img
          className="img- pt-4 mx-2"
          src="https://www.denofgeek.com/wp-content/uploads/2021/12/maxresdefault-1.jpg?resize=768%2C432"
        />
         <hr />
        <div className="d-flex justify-content-betwen align-item-baseline neg-mar col-10">
          <div className="d-flex">
            <img
              src="https://icones.pro/wp-content/uploads/2021/04/icone-noire-noir.png"
              className="like mx-2"
            />
            <div className="like-t pt-2">Like</div>
          </div>

          <div className="d-flex">
            <img
              src="https://cdn2.iconfinder.com/data/icons/medical-healthcare-26/28/Chat-2-512.png"
              className="pt-2 comment"
            />
            <div className="like-t pt-2">Comment</div>
          </div>
        </div>
        <hr />
      </div>

    </div>
  );
}
