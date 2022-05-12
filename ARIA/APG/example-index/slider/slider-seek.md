---
# This is a generated file
title: "Media Seek Slider Example"
ref: /ARIA/APG/example-index/slider/slider-seek

github:
  repository: w3c/aria-practices
  branch: main
  path: examples/slider/slider-seek.html
feedbackmail: public-aria-practices@w3.org
permalink: /ARIA/APG/example-index/slider/slider-seek

sidebar: true

footer: "          <div class='example-page-footer'>            <p><a href='https://github.com/w3c/aria-practices/projects/3'>View issues related to this example</a></p>            <p>Page last updated: November 23, 2021</p>          </div>        "

# Context here: https://github.com/w3c/wai-aria-practices/issues/31
type_of_guidance: APG

lang: en
---
<script src="../js/examples.js"></script>
<script src="../js/highlight.pack.js"></script>
<script src="../js/app.js"></script>

<link rel="stylesheet" href="css/slider-seek.css" />
<script src="js/slider-seek.js"></script>


<link 
  rel="stylesheet"
  href="{{ '/content-assets/wai-aria-practices/styles.css' | relative_url }}"
>
<!-- Code highlighting styles -->
<link 
  rel="stylesheet"
  href="{{ '/ARIA/APG/example-index/css/github.css' | relative_url }}"
>

<script>
const addBodyClass = undefined;
const enableSidebar = true;
if (addBodyClass) document.body.classList.add(addBodyClass);
if (enableSidebar) document.body.classList.add('has-sidebar');
</script>
    
<div>

            <h2>About This Example</h2>
            <details id="support-notice" class="note">
    <summary>Important Note About Use of This Example</summary>
    <p>
        Note: This is an illustrative example of one way of using ARIA that conforms with the ARIA specification.
    </p>
    <ul>
    <li>
        There may be support gaps in some
        <a href="{{ '/ARIA/APG/practices/read-me-first/#browser_and_AT_support' | relative_url }}">browser and assistive technology combinations</a>,
        especially for <a href="{{ '/ARIA/APG/practices/read-me-first/#mobile_and_touch_support' | relative_url }}">mobile/touch devices</a>.
        Testing code based on this example with assistive technologies is essential before considering use in production systems.
    </li>
    <li>
        The <a href="https://aria-at.w3.org">ARIA and Assistive Technologies Project</a>
        is developing measurements of assistive technology support for APG examples.
    </li>
    <li>
        Robust accessibility can be further optimized by choosing implementation patterns that
        <a href="https://www.w3.org/TR/using-aria/#rule1">maximize use of semantic HTML</a>
        and heeding the warning that
        <a href="{{ '/ARIA/APG/practices/read-me-first/#no_aria_better_bad_aria' | relative_url }}">No ARIA is better than Bad ARIA</a>.
    </li>
    </ul>
</details>
          
  
  <div>
    
    <div class="advisement">
      <p>
        <strong>WARNING!</strong> Some users of touch-based assistive technologies may experience difficulty utilizing widgets that implement this slider pattern because the gestures their assistive technology provides for operating sliders may not yet generate the necessary output.
        To change the slider value, touch-based assistive technologies need to respond to user gestures for increasing and decreasing the value by synthesizing key events.
        This is a new convention that may not be fully implemented by some assistive technologies.
        Authors should fully test slider widgets using assistive technologies on devices where touch is a primary input mechanism before considering incorporation into production systems.
      </p>
    </div><img alt=""
          src="{{ '/content-images/wai-aria-practices/img/slider.svg' | relative_url }}"
          class="example-page-example-icon"
        >
    <p>
      The following example of the
      <a href="{{ '/ARIA/APG/patterns/slider/' | relative_url }}">slider design pattern</a>
      illustrates a seek control that could be used to move the current play position in an audio or video media player.
      The example demonstrates how to use <code>aria-valuetext</code> to provide assistive technology users with meaningful names for numeric values.
      In this case, the value of the control is the position in seconds.
      For example, if the play position were 4 minutes and 3 seconds from the start, the slider value is 243.
      If <code>aria-valuetext</code> were not used, assistive technology users would be told that the position is <q>243</q>, which is significantly more difficult to comprehend than <q>4 minutes, 3 seconds</q>.
      So, the code converts the slider value to a string that communicates the position in minutes and seconds and provides that value via <code>aria-valuetext</code>.
    </p>
    <p>Similar examples include: </p>
    <ul>
      <li><a href="slider-color-viewer.html">Color Viewer Slider Example</a>: Basic  horizontal sliders that illustrate setting numeric values for a color picker.</li>
      <li><a href="slider-temperature.html">Vertical Temperature Slider Example</a>: Demonstrates using <code>aria-orientation</code> to specify vertical orientation and <code>aria-valuetext</code> to communicate unit of measure for a temperature input.</li>
      <li><a href="slider-rating.html">Rating Slider Example</a>: Horizontal slider that demonstrates using <code>aria-valuetext</code> to communicate current and maximum value of a rating input for a five star rating scale.</li>
      <li><a href="multithumb-slider.html">Horizontal Multi-Thumb Slider Example</a>: Demonstrates using sliders with two thumbs to provide inputs for  numeric ranges, such as for searching in a price range.</li>
    </ul>

    <section>
      <div class="example-header">
        <h2 id="ex_label">Example</h2>
      </div>
      <div role="separator" id="ex_start_sep" aria-labelledby="ex_start_sep ex_label" aria-label="Start of"></div>
      <div id="ex1" class="example">
        <div class="slider-seek">
          <div id="id-seek-label" class="label">Seek</div>
          <svg role="none" class="slider-group" width="380" height="120">
            <rect class="rail" x="25" y="50" width="300" height="8" rx="5" aria-hidden="true"></rect>
            <g id="id-seek"
              role="slider"
              tabindex="0"
              aria-valuemin="0"
              aria-valuenow="90"
              aria-valuetext="1 minute 30 seconds"
              aria-valuemax="300"
              aria-labelledby="id-seek-label">
              <text class="value" x="0" y="15">1:30</text>
              <rect class="focus-ring"
                x="0" y="0" width="28" height="60" rx="12"></rect>
              <rect class="thumb"
                x="0" y="0" width="14" height="48" rx="5"></rect>
            </g>
            
            <g class="value-label"
              data-value="0">
              <text x="0" y="0">0:00</text>
            </g>
            <g class="value-label"
              data-value="60">
              <text x="0" y="0">1:00</text>
            </g>
            <g class="value-label"
              data-value="120">
              <text x="0" y="0">2:00</text>
            </g>
            <g class="value-label"
              data-value="180">
              <text x="0" y="0">3:00</text>
            </g>
            <g class="value-label"
              data-value="240">
              <text x="0" y="0">4:00</text>
            </g>
            <g class="value-label"
              data-value="300">
              <text x="0" y="0">5:00</text>
            </g>
          </svg>
        </div>
      </div>
      <div role="separator" id="ex_end_sep" aria-labelledby="ex_end_sep ex_label" aria-label="End of"></div>
    </section>

    <section>
      <h2>Accessibility Features</h2>
      <ul>
        <li>
          To ensure assistive technology users correctly perceive the maximum slider value, this example uses the <code>aria-valuetext</code> property to communicate both the current and maximum values.
          However, since repeating the maximum value every time the slider value changes is potentially distracting, the maximum value is included in <code>aria-valuetext</code> only when the slider is initialized and when the thumb loses keyboard focus.
        </li>
        <li>The display of the slider's current value remains adjacent to the thumb as the thumb is moved, so people with a small field of view (e.g., due to magnification) can easily see the value while focusing on the thumb as they move it.</li>
        <li>
          To ensure the borders of the slider rail, thumb and focus ring have sufficient contrast with the background when high contrast settings invert colors, the color of the borders are synchronized with the color of the text content.
          For example, the color of the focus ring border is set to match the foreground color of  high contrast mode text by specifying the CSS <code>currentColor</code> value for the <code>stroke</code> property of the inline SVG <code>rect</code> element used to draw the focus ring border.
          To make the background of the <code>rect</code> match the high contrast background color, the <code>fill-opacity</code> attribute of the <code>rect</code> is set to zero.
          If specific colors were instead used to specify the <code>stroke</code> and <code>fill</code> properties, those colors would remain the same in high contrast mode, which could lead to insufficient contrast between the rail and the thumb or even make them invisible if their color matched the high contrast mode background.<br>
          Note: The SVG element needs to have the CSS <code>forced-color-adjust</code> property set to <code>auto</code> for the <code>currentColor</code> value to be updated in high contrast mode.
          Some browsers do not use <code>auto</code> for the default value.
        </li>
      </ul>
    </section>

    <section>
      <h2 id="kbd_label">Keyboard Support</h2>
      <div class="table-wrap"><table aria-labelledby="kbd_label" class="def">
        <thead>
          <tr>
            <th>Key</th>
            <th>Function</th>
          </tr>
        </thead>
        <tbody>
          <tr data-test-id="key-right-arrow">
            <th>
              <kbd>Right Arrow</kbd>
            </th>
            <td>Increases slider value one step.</td>
          </tr>
          <tr data-test-id="key-up-arrow">
            <th>
              <kbd>Up Arrow</kbd>
            </th>
            <td>Increases slider value one step.</td>
          </tr>
          <tr data-test-id="key-left-arrow">
            <th>
              <kbd>Left Arrow</kbd>
            </th>
            <td>Decreases slider value one step.</td>
          </tr>
          <tr data-test-id="key-down-arrow">
            <th>
              <kbd>Down Arrow</kbd>
            </th>
            <td>Decreases slider value one step.</td>
          </tr>
          <tr data-test-id="key-page-up">
            <th>
              <kbd>Page Up</kbd>
            </th>
            <td>Increases slider value 15 steps.</td>
          </tr>
          <tr data-test-id="key-page-down">
            <th>
              <kbd>Page Down</kbd>
            </th>
            <td>Decreases slider value 15 steps.</td>
          </tr>
          <tr data-test-id="key-home">
            <th>
              <kbd>Home</kbd>
            </th>
            <td>Sets slider to its minimum value.</td>
          </tr>
          <tr data-test-id="key-end">
            <th>
              <kbd>End</kbd>
            </th>
            <td>Sets slider to its maximum value.</td>
          </tr>
        </tbody>
      </table></div>
    </section>

    <section>
      <h2 id="rps_label">Role, Property, State, and Tabindex Attributes</h2>

      <div class="table-wrap"><table aria-labelledby="rps_label rps_label" class="data attributes">
        <thead>
          <tr>
            <th scope="col">Role</th>
            <th scope="col">Attribute</th>
            <th scope="col">Element</th>
            <th scope="col">Usage</th>
          </tr>
        </thead>
        <tbody>
          <tr data-test-id="svg-none">
            <th scope="row">
              <code>none</code>
            </th>
            <td></td>
            <td>
              <code>svg</code>
            </td>
            <td>
              The use of the <code>none</code> role on the SVG element ensures assistive technologies do not interpret the SVG element as an image or some other role.
            </td>
          </tr>
          <tr data-test-id="slider-role">
            <th scope="row">
              <code>slider</code>
            </th>
            <td></td>
            <td>
              <code>g</code>
            </td>
            <td>
              <ul>
                <li>Identifies the element as a slider.</li>
                <li>Set on the <code>g</code> element that represents as the movable thumb because it is the operable element that represents the slider value.</li>
              </ul>
            </td>
          </tr>
          <tr data-test-id="slider-tabindex">
            <td></td>
            <th scope="row">
              <code>tabindex="0"</code>
            </th>
            <td>
              <code>g</code>
            </td>
            <td>Includes the slider thumb in the page tab sequence.</td>
          </tr>
          <tr data-test-id="aria-valuemax">
            <td></td>
            <th scope="row">
              <code>aria-valuemax="NUMBER"</code>
            </th>
            <td>
              <code>g</code>
            </td>
            <td>Specifies a numeric value that is the maximum value the slider can have.</td>
          </tr>
          <tr data-test-id="aria-valuemin">
            <td></td>
            <th scope="row">
              <code>aria-valuemin="NUMBER"</code>
            </th>
            <td>
              <code>g</code>
            </td>
            <td>Specifies a numeric value that is the minimum value the slider can have.</td>
          </tr>
          <tr data-test-id="aria-valuenow">
            <td></td>
            <th scope="row">
              <code>aria-valuenow="NUMBER"</code>
            </th>
            <td>
              <code>g</code>
            </td>
            <td>A numeric value that is the current value of the slider.</td>
          </tr>
          <tr data-test-id="aria-valuetext">
            <td></td>
            <th scope="row">
              <code>aria-valuetext="STRING"</code>
            </th>
            <td>
              <code>g</code>
            </td>
            <td>
              <ul>
                <li>A string value that provides a user-friendly name for the current value of the slider. In this example, it is the value converted to minutes and seconds.</li>
                <li>Additionally includes the maximum value in minutes when the slider is initialized and when the thumb receives keyboard focus.</li>
                <li>Note: To prevent unnecessary screen reader verbosity,  the maximum value is not included when the value changes.</li>
              </ul>
            </td>
          </tr>
          <tr data-test-id="aria-labelledby">
            <td></td>
            <th scope="row">
              <code>aria-labelledby="IDREF"</code>
            </th>
            <td>
              <code>g</code>
            </td>
            <td>Refers to the element containing the name (e.g. label) of the slider.</td>
          </tr>
          <tr data-test-id="aria-hidden-rect">
            <td></td>
            <th scope="row">
              <code>aria-hidden="true"</code>
            </th>
            <td>
              <code>rect</code>
            </td>
            <td>Removes the SVG <code>rect</code> element from the accessibility tree to prevent assistive technologies from presenting it as an image separate from the slider.</td>
          </tr>
        </tbody>
      </table></div>
    </section>

    <section>
      <h2>Javascript and CSS Source Code</h2>
      <ul id="css_js_files">
        <li>CSS: <a href="css/slider-seek.css" type="text/css">slider-seek.css</a></li>
        <li>Javascript: <a href="js/slider-seek.js" type="text/javascript">slider-seek.js</a></li>
      </ul>
    </section>

    <section>
      <h2 id="sc1_label">HTML Source Code</h2>
      <div role="separator" id="sc1_start_sep" aria-labelledby="sc1_start_sep sc1_label" aria-label="Start of"></div>
      <pre><code id="sc1"></code></pre>
      <div role="separator" id="sc1_end_sep" aria-labelledby="sc1_end_sep sc1_label" aria-label="End of"></div>
      <script>
        sourceCode.add('sc1', 'ex1', 'ex_label', 'css_js_files');
        sourceCode.make();
      </script>
    </section>
  </div>
  

</div>
<script>
  var SkipToConfig = {
    settings: {
      skipTo: {
        displayOption: 'popup',
        attachElement: '#site-header',
        colorTheme: 'aria'
      }
    }
  };
</script>
<script 
  src="{{ '/content-assets/wai-aria-practices/skipto.min.js' | relative_url }}"
></script>