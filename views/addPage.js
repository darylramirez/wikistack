const html = require("html-template-tag");
const layout = require("./layout");

module.exports = () =>
  layout(html`
    <h3>Add a Page</h3>
    <hr />
    <form method="POST" action="/wiki/">
      <label for="name">Author</label>
      <div><input name="Author" type="text"/></div>

      <label for="name">Email Address</label>
      <div><input name="email" type="email" /></div>

      <div><label for="name">Page Title</label>
      <div><input name="Page Title" type="text" /></div></div>
     <div>
      
      <div class="form-group">
      <label for="name">Content</label>
      <input name="content" type="text" class="form-control" />
     
      </div>

      
      <label for="name">Page Status</label>
      <div><input name="Page Status" type="radio" id="html" name="fav_language" value="HTML">
      <label for="html">Yes</label><br>
      <input name="Page Status" type="radio" id="css" name="fav_language" value="CSS">
      <label for="css">No</label><br>
      </div>
</div>

      <div class="col-sm-offset-2 col-sm-10">
        <button type="submit" class="btn btn-primary">submit</button>
      </div>
    </form>
  `);
