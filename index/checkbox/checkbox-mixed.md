---
# This is a generated file
title: "Checkbox Example (Mixed-State)"
ref: /aria-practices/

github:
  repository: w3c/aria-practices
  path: aria-practices.html
permalink: /index/checkbox/checkbox-mixed

lang: en
---
<script src="../js/examples.js"></script>
<script src="../js/highlight.pack.js"></script>
<script src="../js/app.js"></script>

<link href="css/checkbox-mixed.css" rel="stylesheet" />
<script src="js/checkbox-mixed.js" type="text/javascript"></script>


<link rel="stylesheet" href="/assets/styles.css">
<!-- Code highlighting styles -->
<link rel="stylesheet" href="/index/css/github.css">

<div>

        <div class="sidebar-container">
          <aside class="sidebar-left" aria-describedby="sidebar-toc">
            <h2 id="sidebar-toc" class="sidebar-headline">Table of Contents</h2>
            <ul class="sidebar-list">
              
                    <li>
                      <a href="#ex_label">Example</a>
                    </li>
                   
                    <li>
                      <a href="#accessibility-features">Accessibility Features</a>
                    </li>
                   
                    <li>
                      <a href="#kbd_label">Keyboard Support</a>
                    </li>
                   
                    <li>
                      <a href="#rps_label">Role, Property, State, and Tabindex  Attributes</a>
                    </li>
                   
                    <li>
                      <a href="#javascript-and-css-source-code">Javascript and CSS Source Code</a>
                    </li>
                   
                    <li>
                      <a href="#sc1_label">HTML Source Code</a>
                    </li>
                  
            </ul>
            
      <ul class="sidebar-list sidebar-list-yellow">
        <li><a href="/about/#browser_and_AT_support">Browser and Assistive Technology Support</a></li>
        <li><a href="https://github.com/w3c/aria-practices/issues/new">Report Issue</a></li>
        <li><a href="https://github.com/w3c/aria-practices/projects/9">Related Issues</a></li>
        <li><a href="/patterns/checkbox/">Design Pattern</a></li>
      </ul>
    
          </aside>
          <div class="sidebar-right"><h2 class="followed-by-support-notice">About This Example</h2><img alt=""
        src="/assets/img/checkbox.svg"
        class="example-page-example-icon"
      >
    
    <div>
      
      <p>
        This example demonstrates using the  <a href="/patterns/checkbox/">Checkbox Design Pattern</a> to create a tri-state, or mixed-state, checkbox.
        In this implementation, the mixed-state checkbox represents the state of a set of standard HTML checkboxes.
        If none of the checkboxes in the set are checked, the mixed state checkbox is not checked, and if all members of the set are checked, the mixed state checkbox is checked.
        If the set contains both some checked and unchecked checkboxes, the mixed state checkbox is partially checked.
        Activating the tri-state checkbox changes the states of the checkboxes in the set.
      </p>
      <p>Similar examples include: </p>
      <ul>
        <li><a href="checkbox.html">Checkbox (Two State)</a>: Simple two state checkbox.</li>
      </ul>
      <section>
        <div class="example-header">
          <h2 id="ex_label" tabindex="-1">Example</h2>
        </div>
        <div role="separator" id="ex_start_sep" aria-labelledby="ex_start_sep ex_label" aria-label="Start of"></div>
        <div id="ex1">
           <fieldset class="checkbox-mixed">
              <legend>Sandwich Condiments</legend>
                  <div role="checkbox"
                      class="group_checkbox"
                      aria-checked="mixed"
                      aria-controls="cond1 cond2 cond3 cond4"
                      tabindex="0"
                  >
                    All condiments
                </div>
                <ul class="checkboxes">
                  <li><label><input type="checkbox" id="cond1">Lettuce</label></li>
                  <li><label><input type="checkbox" id="cond2" checked>Tomato</label></li>
                  <li><label><input type="checkbox" id="cond3">Mustard</label></li>
                  <li><label><input type="checkbox" id="cond4">Sprouts</label></li>
                </ul>
          </fieldset>
        </div>
        <div role="separator" id="ex_end_sep" aria-labelledby="ex_end_sep ex_label" aria-label="End of"></div>
      </section>


    <section>
      <h2 tabindex="-1" id="accessibility-features">Accessibility Features</h2>
      <ul>
        <li>To help assistive technology users understand that the checkboxes are all part of a group of related checkboxes named <q>Sandwich Condiments</q>, the checkboxes are wrapped in a <code>fieldset</code> element which is labeled by a <code>legend</code> element.</li>
        <li>To make it easier to perceive that clicking either the label or checkbox will activate the checkbox, when a pointer hovers over either the checkbox or label, the background color changes, a border appears, and the cursor changes to a pointer.</li>
        <li>
          Because transparent borders are visible on some systems when operating system high contrast settings are enabled, transparency cannot be used to create a visual difference between the element that is focused and other elements.
          Instead of using transparency, the focused element has a thicker border and less padding.
          When an element receives focus, its border changes from 0 to 2 pixels and padding is reduced by 2 pixels.
          When an element loses focus, its border changes from 2 pixels to 0 and padding is increased by 2 pixels.
        </li>
        <li>
          To ensure the borders of the inline SVG checkbox graphics in the CSS have sufficient contrast with the background when high contrast settings invert colors, the color of the borders are synchronized with the color of the text content.
          For example, the color of the checkbox borders is set to match the foreground color of high contrast mode text by specifying the CSS <code>currentColor</code> value for the <code>stroke</code> property of the <code>rect</code> and <code>polyline</code> elements used to draw the checkbox.
           To make the background of the checkbox graphics match the high contrast background color, the <code>fill-opacity</code> attribute of the <code>rect</code> element is set to zero.
          If specific colors were instead used to specify the <code>stroke</code> and <code>fill</code> properties, those colors would remain the same in high contrast mode, which could lead to insufficient contrast between the checkbox and the background or even make the checkbox invisible if the color matched the high contrast mode background.<br>
          Note: The SVG element needs to have the CSS <code>forced-color-adjust</code> property set to <code>auto</code> for the <code>currentColor</code> value to be updated in high contrast mode.
          Some browsers do not use <code>auto</code> for the default value.
        </li>
      </ul>
    </section>

      <section>
        <h2 id="kbd_label" tabindex="-1">Keyboard Support</h2>
        <div class="table-wrap"><table aria-labelledby="kbd_label" class="def">
          <thead>
            <tr>
              <th>Key</th>
              <th>Function</th>
            </tr>
          </thead>
          <tbody>
            <tr data-test-id="key-tab">
              <th><kbd>Tab</kbd></th>
              <td>Moves keyboard focus among the checkboxes.</td>
            </tr>
            <tr data-test-id="key-space">
              <th><kbd>Space</kbd></th>
              <td>
                <ul>
                  <li>Cycles the tri-state checkbox among unchecked, mixed, and checked states.</li>
                  <li>When the tri-state checkbox is unchecked, all the controlled checkboxes are unchecked.</li>
                  <li>When the tri-state checkbox is mixed, the controlled checkboxes return to the last combination of states they had when the tri-state checkbox was last mixed or to the default combination of states they had when the page loaded.</li>
                  <li>When the tri-state checkbox is checked, all the controlled checkboxes are checked.</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table></div>
      </section>

      <section>
        <h2 id="rps_label" tabindex="-1">Role, Property, State, and Tabindex  Attributes</h2>
        <div class="table-wrap"><table aria-labelledby="rps_label" class="data attributes">
          <thead>
            <tr>
              <th scope="col">Role</th>
              <th scope="col">Attribute</th>
              <th scope="col">Element</th>
              <th scope="col">Usage</th>
            </tr>
          </thead>
          <tbody>
              <tr data-test-id="checkbox-role">
                <th scope="row"><code>checkbox</code></th>
                <td></td>
                <td><code>div</code></td>
                <td>
                  <ul>
                    <li>Identifies the <code>div</code> element as a <code>checkbox</code>.</li>
                    <li>The child text content of this <code>div</code> provides the accessible name of the checkbox.</li>
                  </ul>
                </td>
              </tr>
              <tr data-test-id="checkbox-tabindex">
                <td></td>
                <th scope="row"><code>tabindex=&quot;0&quot;</code></th>
                <td><code>div</code></td>
                <td>Includes the checkbox in the page tab sequence.</td>
              </tr>
              <tr data-test-id="checkbox-aria-controls">
                <td></td>
                <th scope="row"><code>aria-controls=&quot;[IDREFS]&quot;</code></th>
                <td><code>div</code></td>
                <td>identifies the set of checkboxes controlled by the mixed checkbox.</td>
              </tr>
              <tr data-test-id="checkbox-aria-checked-false">
                <td></td>
                <th scope="row"><code>aria-checked=&quot;false&quot;</code></th>
                <td><code>div</code></td>
                <td>
                  <ul>
                    <li>Indicates the tri-state <code>checkbox</code> is <strong>not</strong> checked.</li>
                    <li>In this state, all controlled checkboxes are unchecked.</li>
                    <li>CSS attribute selectors (e.g. <code>[aria-checked=&quot;false&quot;]</code>) are used to synchronize the visual states with the value of the <code>aria-checked</code> attribute.</li>
                    <li>To support operating system and browser high contrast settings, the CSS <code>::before</code> pseudo element and <code>content</code> property are used to generate the visual indicators of the checkbox state.</li>
                  </ul>
                </td>
              </tr>
              <tr data-test-id="checkbox-aria-checked-true">
                <td></td>
                <th scope="row"><code>aria-checked=&quot;true&quot;</code></th>
                <td><code>div</code></td>
                <td>
                  <ul>
                    <li>Indicates the tri-state <code>checkbox</code> is checked.</li>
                    <li>In this state, all controlled checkboxes are checked.</li>
                    <li>CSS attribute selectors (e.g. <code>[aria-checked=&quot;true&quot;]</code>) are used to synchronize the visual states with the value of the <code>aria-checked</code> attribute.</li>
                    <li>To support operating system and browser high contrast settings, the CSS <code>::before</code> pseudo element and <code>content</code> property are used to generate the visual indicators of the checkbox state.</li>
                  </ul>
                </td>
              </tr>
              <tr data-test-id="checkbox-aria-checked-mixed">
                <td></td>
                <th scope="row"><code>aria-checked=&quot;mixed&quot;</code></th>
                <td><code>div</code></td>
                <td>
                    <ul>
                      <li>Indicates the tri-state <code>checkbox</code> is mixed.</li>
                      <li>In this state, some controlled checkboxes are unchecked and some are checked.</li>
                      <li>CSS attribute selectors (e.g. <code>[aria-checked=&quot;mixed&quot;]</code>) are used to synchronize the visual states with the value of the <code>aria-checked</code> attribute.</li>
                      <li>To support operating system and browser high contrast settings, the CSS <code>::before</code> pseudo element and <code>content</code> property are used to generate the visual indicators of the checkbox state.</li>
                    </ul>
                </td>
              </tr>
          </tbody>
        </table></div>
      </section>

       <section>
        <h2 tabindex="-1" id="javascript-and-css-source-code">Javascript and CSS Source Code</h2>
        <ul id="css_js_files">
          <li>CSS: <a href="css/checkbox-mixed.css" type="text/css">checkbox-mixed.css</a></li>
          <li>Javascript: <a href="js/checkbox-mixed.js" type="text/javascript">checkbox-mixed.js</a></li>
        </ul>
      </section>

      <section>
        <h2 id="sc1_label" tabindex="-1">HTML Source Code</h2>
        <div role="separator" id="sc1_start_sep" aria-labelledby="sc1_start_sep sc1_label" aria-label="Start of"></div>
        <pre><code id="sc1"></code></pre>
        <div role="separator" id="sc1_end_sep" aria-labelledby="sc1_end_sep sc1_label" aria-label="End of"></div>
        <script>
          sourceCode.add('sc1', 'ex1', 'ex_label', 'css_js_files');
          sourceCode.make();
        </script>
      </section>
  </div>
  <nav>
    <a href="/patterns/checkbox/">Checkbox Design Pattern in WAI-ARIA Authoring Practices 1.2</a>
  </nav>
</div>
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
<script src="/assets/skipto.min.js"></script>