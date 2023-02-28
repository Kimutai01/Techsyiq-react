import React from "react";
import dots from "../../assets/teamrect.svg";

const Team = () => {
  return (
    <div>
      <h1>My Team</h1>
      <p>
        To be the coding school our students expect us to be, it takes an
        eclectic, vibrant group of passionate individuals. Meet the people
        leading the way at Techsyiq.
      </p>
      <div className="flex md:flex-row flex-col p-10">
        <div className="w-[100%] mr-10 shadow-md border-r-10">
          <img src={dots} alt="" />
          <div>
            <h4>John Doe</h4>
          </div>
          <p>Founder</p>
        </div>
        <div className="flex items-center">
          Quis nunc blandit est pharetra aliquam venenatis. Lectus cursus nibh
          sed eget non lacus euismod. Sit risus, aliquet adipiscing viverra.
          Massa auctor proin ac tempor maecenas. Congue libero, dolor volutpat
          imperdiet. Mattis mauris erat pulvinar massa a diam tempus cras lacus.
          Enim duis tempor, et tellus quis egestas tristique pellentesque
          elementum. Felis praesent consectetur a, a viverra. In sed aenean
          luctus commodo at augue arcu. Interdum dolor, semper volutpat et enim.
          Quisque rhoncus at id scelerisque sit. Pulvinar lacus diam risus
          dignissim ipsum pretium vulputate feugiat mauris. Odio fames volutpat
          massa est magna molestie. In tortor vitae nunc, adipiscing justo,
          eget. Dui pellentesque massa blandit in semper. Nunc ultricies
          faucibus et nec. Nam euismod sodales rhoncus nam sit. Tempor, leo elit
          hendrerit amet, egestas.
        </div>
      </div>

      <div className="flex md:flex-row-reverse flex-col-reverse p-10">
        <div className="w-[100%] mr-10 shadow-md border-r-10">
          <img src={dots} alt="" />
          <div>
            <h4>John Doe</h4>
          </div>
          <p>Founder</p>
        </div>
        <div className="flex items-center">
          Quis nunc blandit est pharetra aliquam venenatis. Lectus cursus nibh
          sed eget non lacus euismod. Sit risus, aliquet adipiscing viverra.
          Massa auctor proin ac tempor maecenas. Congue libero, dolor volutpat
          imperdiet. Mattis mauris erat pulvinar massa a diam tempus cras lacus.
          Enim duis tempor, et tellus quis egestas tristique pellentesque
          elementum. Felis praesent consectetur a, a viverra. In sed aenean
          luctus commodo at augue arcu. Interdum dolor, semper volutpat et enim.
          Quisque rhoncus at id scelerisque sit. Pulvinar lacus diam risus
          dignissim ipsum pretium vulputate feugiat mauris. Odio fames volutpat
          massa est magna molestie. In tortor vitae nunc, adipiscing justo,
          eget. Dui pellentesque massa blandit in semper. Nunc ultricies
          faucibus et nec. Nam euismod sodales rhoncus nam sit. Tempor, leo elit
          hendrerit amet, egestas.
        </div>
      </div>

      <div className="flex md:flex-row flex-col p-10">
        <div className="w-[100%] mr-10 shadow-md border-r-10">
          <img src={dots} alt="" />
          <div>
            <h4>John Doe</h4>
          </div>
          <p>Founder</p>
        </div>
        <div className="flex items-center">
          Quis nunc blandit est pharetra aliquam venenatis. Lectus cursus nibh
          sed eget non lacus euismod. Sit risus, aliquet adipiscing viverra.
          Massa auctor proin ac tempor maecenas. Congue libero, dolor volutpat
          imperdiet. Mattis mauris erat pulvinar massa a diam tempus cras lacus.
          Enim duis tempor, et tellus quis egestas tristique pellentesque
          elementum. Felis praesent consectetur a, a viverra. In sed aenean
          luctus commodo at augue arcu. Interdum dolor, semper volutpat et enim.
          Quisque rhoncus at id scelerisque sit. Pulvinar lacus diam risus
          dignissim ipsum pretium vulputate feugiat mauris. Odio fames volutpat
          massa est magna molestie. In tortor vitae nunc, adipiscing justo,
          eget. Dui pellentesque massa blandit in semper. Nunc ultricies
          faucibus et nec. Nam euismod sodales rhoncus nam sit. Tempor, leo elit
          hendrerit amet, egestas.
        </div>
      </div>
    </div>
  );
};

export default Team;
