import { useState, useEffect, useRef } from 'react';
import './CreateReview.css';


export default function ReviewPage() {
    return (
        <div>
            <form id="add-review-form">
            <select name="rating">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5" selected>5</option>
            </select>
            <textarea name="content" style="width: 500px; height: 60px;"></textarea>
            <input type="submit" value="Add Review"/>
          </form>
        </div>
    );
}