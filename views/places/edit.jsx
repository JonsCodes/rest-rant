const React = require('react');
const Def = require('../default');

function EditForm({ place, id }) {
  return (
    <Def>
      <main>
        <h1>Edit Place</h1>
        <form method="POST" action={`/places/${id}?_method=PUT`}>
          <div className="row">
            <div className="form-group col-sm-6">
              <label htmlFor="name">Place Name</label>
              <input
                id="name"
                name="placeName"
                defaultValue={place.name}
                placeholder="Enter place name"
              />
            </div>
            <div className="form-group col-sm-6">
              <label htmlFor="pic">Place Picture</label>
              <input
                id="pic"
                name="placePicture"
                defaultValue={place.pic}
                placeholder="Enter place picture URL"
              />
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
      </main>
    </Def>
  );
}

module.exports = EditForm;
