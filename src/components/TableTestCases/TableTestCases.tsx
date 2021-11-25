import { TestCase } from "../TestCase";

export const TableTestCases = () => {
  return (
    <>
      <TestCase
        testCaseTitle={"Table with column headers and double row headers"}
        testCategory={"tables"}
        testCaseNumber={43}
      >
        <table>
          <caption>Road Traffic at Junctions</caption>
          <tbody>
            <tr>
              <th>Road</th>
              <th>Junction</th>
              <th>Car</th>
              <th>Bus</th>
            </tr>
            <tr>
              <th>Regent Street</th>
              <th>Oxford Street</th>
              <td>307</td>
              <td>12</td>
            </tr>
            <tr>
              <th>Regent Street</th>
              <th>Bond Street</th>
              <td>1731</td>
              <td>58</td>
            </tr>
            <tr>
              <th>Southwark Street</th>
              <th>Union Street</th>
              <td>1975</td>
              <td>51</td>
            </tr>
          </tbody>
        </table>
      </TestCase>
      <TestCase
        testCaseTitle={"Table has no scope attributes"}
        testCategory={"tables"}
        testCaseNumber={44}
      >
        <table>
          <caption>Opening times</caption>
          <tbody>
            <tr>
              <td></td>
              <th>Monday-Friday</th>
              <th>Saturday</th>
              <th>Sunday</th>
            </tr>
            <tr>
              <th>08:00 - 12:00</th>
              <td>open</td>
              <td>open</td>
              <td>closed</td>
            </tr>
            <tr>
              <th>12:00 - 16:00</th>
              <td>open</td>
              <td>closed</td>
              <td>closed</td>
            </tr>
          </tbody>
        </table>
      </TestCase>
      <TestCase
        testCaseTitle={"Table nested within table header"}
        testCategory={"tables"}
        testCaseNumber={45}
      >
        <table>
          <tbody>
            <tr>
              <th>Item</th>
              <th>Cost</th>
            </tr>
            <tr>
              <td>Lunch</td>
              <td>£6.99</td>
            </tr>
            <tr>
              <th>
                Holiday
                <table>
                  <tbody>
                    <tr>
                      <th>Item</th>
                      <th>Cost</th>
                    </tr>
                    <tr>
                      <td>Accomodation</td>
                      <td>£499.99</td>
                    </tr>
                    <tr>
                      <td>Travel</td>
                      <td>£109.99</td>
                    </tr>
                  </tbody>
                </table>
              </th>
              <td>£609.99</td>
            </tr>
          </tbody>
        </table>
      </TestCase>
      <TestCase
        testCaseTitle={"Table nested within table"}
        testCategory={"tables"}
        testCaseNumber={46}
      >
        <table>
          <tbody>
            <tr>
              <th>Item</th>
              <th>Cost</th>
            </tr>
            <tr>
              <td>Lunch</td>
              <td>£6.99</td>
            </tr>
            <tr>
              <td>
                Holiday
                <table>
                  <tbody>
                    <tr>
                      <th>Item</th>
                      <th>Cost</th>
                    </tr>
                    <tr>
                      <td>Accomodation</td>
                      <td>£499.99</td>
                    </tr>
                    <tr>
                      <td>Travel</td>
                      <td>£109.99</td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td>£609.99</td>
            </tr>
          </tbody>
        </table>
      </TestCase>
      <TestCase
        testCaseTitle={"Table has no table headings"}
        testCategory={"tables"}
        testCaseNumber={47}
      >
        <table>
          <caption>Shelly's Daughters</caption>
          <thead>
            <tr>
              <td>Name</td>
              <td>Age</td>
              <td>Birthday</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Jackie</td>
              <td>5</td>
              <td>April 5</td>
            </tr>
            <tr>
              <td>Beth</td>
              <td>8</td>
              <td>January 14</td>
            </tr>
          </tbody>
        </table>
      </TestCase>
      <TestCase
        testCaseTitle={"Table with inconsistent numbers of columns in rows"}
        testCategory={"tables"}
        testCaseNumber={48}
      >
        <table>
          <caption>Requester information</caption>
          <thead>
            <tr>
              <th colSpan={10}>Requester information</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className={"label"} colSpan={1} id={"name"}>
                Name
              </th>
              <td colSpan={7} headers={"name"}>
                Jon Smith
              </td>
              <th className={"label"} colSpan={1} id={"date"}>
                Date
              </th>
              <td colSpan={1} headers={"date"}>
                9/9/2005
              </td>
            </tr>
            <tr>
              <th className={"label"} colSpan={1} id={"dept"}>
                Department
              </th>
              <td colSpan={9} headers={"dept"}>
                Customer Service
              </td>
            </tr>
            <tr>
              <th className={"label"} colSpan={1} id={"remail"}>
                E-Mail
              </th>
              <td colSpan={4} headers={"remail"}>
                jon.smith@gov.uk
              </td>
              <th className={"label"} colSpan={1} id={"rphone"}>
                Phone
              </th>
              <td colSpan={4} headers={"rphone"}>
                07700 900258
              </td>
            </tr>
          </tbody>
        </table>
      </TestCase>
      <TestCase
        testCaseTitle={"Table that only has TH elements in it"}
        testCategory={"tables"}
        testCaseNumber={49}
      >
        <table>
          <thead>
            <tr>
              <th>Foo</th>
              <th>Bar</th>
              <th>Bat</th>
              <th>Baz</th>
            </tr>
          </thead>
        </table>
      </TestCase>
      <TestCase
        testCaseTitle={"Table is missing a caption"}
        testCategory={"tables"}
        testCaseNumber={50}
      >
        <table>
          <thead>
            <tr>
              <th scope={"col"}>Name</th>
              <th scope={"col"}>Age</th>
              <th scope={"col"}>Birthday</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope={"row"}>Jackie</th>
              <td>5</td>
              <td>April 5</td>
            </tr>
            <tr>
              <th scope={"row"}>Beth</th>
              <td>8</td>
              <td>January 14</td>
            </tr>
          </tbody>
        </table>
      </TestCase>
      <TestCase
        testCaseTitle={"Table used for layout"}
        testCategory={"tables"}
        testCaseNumber={51}
      >
        <table>
          <tbody>
            <tr>
              <td>
                <ul>
                  <li>
                    <a href={"home.html"}>HOME</a>
                  </li>
                  <li>
                    <a href={"about-us.html"}>About us</a>
                  </li>
                  <li>
                    <a href={"products.html"}>Our products</a>
                  </li>
                </ul>
              </td>
              <td>
                <h2>Welcome to our homepage</h2>
                <p>
                  Here you can find out who we are, what we do and why you
                  should buy our products.
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </TestCase>
      <TestCase
        testCaseTitle={"Table has an empty table header"}
        testCategory={"tables"}
        testCaseNumber={52}
      >
        <table>
          <caption>Shelly's Daughters</caption>
          <thead>
            <tr>
              <th></th>
              <th scope={"col"}>Age</th>
              <th scope={"col"}>Birthday</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope={"row"}>Jackie</td>
              <td>5</td>
              <td>April 5</td>
            </tr>
            <tr>
              <td scope={"row"}>Beth</td>
              <td>8</td>
              <td>January 14</td>
            </tr>
          </tbody>
        </table>
      </TestCase>
      <TestCase
        testCaseTitle={"Table with some empty cells"}
        testCategory={"tables"}
        testCaseNumber={53}
      >
        <table>
          <caption>Bills before Parliament 2016-17</caption>
          <thead>
            <tr>
              <th>Current House</th>
              <th>Bill title</th>
              <th>Last updated</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>&nbsp;</td>
              <td>A</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>Lords</td>
              <td>Abortion (Disability Equality) Bill [HL]</td>
              <td>26.05.2016</td>
            </tr>
            <tr>
              <td>Lords</td>
              <td>Access to Palliative Care Bill [HL]</td>
              <td>10.06.2016</td>
            </tr>
          </tbody>
        </table>
      </TestCase>
    </>
  );
};
