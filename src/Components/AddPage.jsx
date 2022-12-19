import React from 'react'

function AddPage() {
  return (
    <div class="form-container">
        <form id="#only-form">
            <div class="input-group">
                <label for="Name">Name</label>
                <input name="Name" id="Name" type="text" autoComplete="off" autoFocus/>
            </div>
            <div class="input-group">
                <label for="Email">Email</label>
                <input name="Email" id="Email" type="email" autoComplete="off" />
            </div>
            <div class="input-group">
                <label for="phoneNumber">Phone Number</label>
                <input name="phoneNumber" id="phoneNumber" type="number" step="0.01" autoComplete="off" />
            </div>
            <button class="btn" type="submit">Save</button>
        </form>
    </div>
  )
}

export default AddPage;