---
# This is a generated file
title: "Checkbox Example (Two State)"
ref: /aria-practices/

github:
  repository: w3c/aria-practices
  path: aria-practices.html
permalink: /index/checkbox/checkbox

lang: en
---
<script src="../js/examples.js"></script>
<script src="../js/highlight.pack.js"></script>
<script src="../js/app.js"></script>

<link href="css/checkbox.css" rel="stylesheet" />
<script src="js/checkbox.js" type="text/javascript"></script>


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
                      <a href="#html-source-code">HTML Source Code</a>
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
    
    <p>This example implements the  <a href="/patterns/checkbox/">Checkbox Design Pattern</a> for a two state checkbox using <code>div</code> elements.</p>

    <p>Similar examples include: </p>
    <ul>
      <li><a href="checkbox-mixed.html">Checkbox (Mixed-State)</a>: Demonstrates  a checkbox that uses the mixed  value for aria-checked to reflect and control checked states within a group of two-state HTML checkboxes contained in  an HTML <code>fieldset</code>.</li>
    </ul>

    <section>
      <div class="example-header">
        <h2 id="ex_label" tabindex="-1">Example</h2>
      </div>
      <div role="separator" id="ex_start_sep" aria-labelledby="ex_start_sep ex_label" aria-label="Start of"></div>

      <div id="ex1">
        <h3 id="id-group-label">Sandwich Condiments</h3>
        <div role="group" aria-labelledby="id-group-label">
          <ul class="checkboxes">
            <li><div role="checkbox" aria-checked="false" tabindex="0">Lettuce</div></li>
            <li><div role="checkbox" aria-checked="true"  tabindex="0">Tomato</div></li>
            <li><div role="checkbox" aria-checked="false" tabindex="0">Mustard</div></li>
            <li><div role="checkbox" aria-checked="false" tabindex="0">Sprouts</div></li>
          </ul>
        </div>

      </div>

      <div role="separator" id="ex_end_sep" aria-labelledby="ex_end_sep ex_label" aria-label="End of"></div>

    </section>

    <section>
      <h2 tabindex="-1" id="accessibility-features">Accessibility Features</h2>
      <ul>
        <li>To help assistive technology users understand that each checkbox is part of a set of related checkboxes named <q>Sandwich Condiments</q>, the checkboxes are wrapped in a <code>group</code> labeled by the <code>h3</code> heading element.</li>
        <li>To enable assistive technology users to perceive the set of checkboxes as a list of four items, each  <code>div</code> element that serves as a checkbox is contained within  a <code>li</code> element contained by  a <code>ul</code> element.</li>
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
          <td>Moves keyboard focus to the <code>checkbox</code>.</td>
        </tr>
          <tr data-test-id="key-space">
            <th><kbd>Space</kbd></th>
            <td>Toggles checkbox between checked and unchecked states.</td>
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
            <tr data-test-id="h3">
              <th scope="row"></th>
              <td></td>
              <td><code>h3</code></td>
              <td>
                <ul>
                  <li>Provides a grouping label for the group of checkboxes.</li>
                </ul>
              </td>
            </tr>
            <tr data-test-id="group-role">
              <th scope="row"><code>group</code></th>
              <td></td>
              <td><code>div</code></td>
              <td>
                <ul>
                  <li>Identifies the <code>div</code> element as a <code>group</code> container for the checkboxes.</li>
                </ul>
              </td>
            </tr>
            <tr data-test-id="group-aria-labelledby">
              <th scope="row"></th>
              <td><code>aria-labelledby</code></td>
              <td><code>div</code></td>
              <td>References the <code>id</code> attribute of the <code>h3</code> element to define the accessible name for the group of checkboxes.</td>
            </tr>
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
              <th scope="row"><code>tabindex="0"</code></th>
              <td><code>div</code></td>
              <td>Includes the checkbox in the page tab sequence.</td>
            </tr>
            <tr data-test-id="checkbox-aria-checked">
              <td></td>
              <th scope="row"><code>aria-checked="false"</code></th>
              <td><code>div</code></td>
              <td>
                  <ul>
                    <li>Indicates the <code>checkbox</code> is <strong>not</strong> checked.</li>
                    <li>CSS attribute selectors (e.g. <code>[aria-checked="false"]</code>) are used to synchronize the visual states with the value of the <code>aria-checked</code> attribute.</li>
                    <li>To support operating system and browser high contrast settings, the CSS <code>::before</code> pseudo element and <code>content</code> property are used to generate the visual indicators of the checkbox state.</li>
                  </ul>
              </td>
            </tr>
            <tr data-test-id="checkbox-aria-checked">
              <td></td>
              <th scope="row"><code>aria-checked="true"</code></th>
              <td><code>div</code></td>
              <td>
                  <ul>
                    <li>Indicates the <code>checkbox</code> is checked.</li>
                    <li>CSS attribute selectors (e.g. <code>[aria-checked="true"]</code>) are used to synchronize the visual states with the value of the <code>aria-checked</code> attribute.</li>
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
        <li>
          CSS: <a href="css/checkbox.css" type="text/css">checkbox.css</a>
        </li>
        <li>
          Javascript: <a href="js/checkbox.js" type="text/javascript">checkbox.js</a>
        </li>
      </ul>
    </section>

    <section>
      <h2 tabindex="-1" id="html-source-code">HTML Source Code</h2>
      <h3 id="sc1_label">Simple Two-State Checkbox Example</h3>
      <div id="sc1_start_sep" role="separator" aria-labelledby="sc1_start_sep sc1_label" aria-label="Start of HTML for"></div>
      <pre><code id="sc1"></code></pre>
      <div id="sc1_end_sep" role="separator" aria-labelledby="sc1_end_sep sc1_label" aria-label="End of HTML for"></div>

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