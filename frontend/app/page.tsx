import React from "react";
import Link from "next/link";

// Helper component for images with unknown dimensions
function Img({
  src,
  alt,
  ...props
}: {
  src: string;
  alt: string;
  [key: string]: any;
}) {
  return (
    <img
      src={src}
      alt={alt}
      {...props}
      style={{
        maxWidth: "100%",
        height: "auto",
        display: "block",
        margin: "1.5rem auto",
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
      }}
    />
  );
}

export default function Home() {
  return (
    <div className="container">
      <h1>
        <strong>GPortal – Generic Portal</strong>
      </h1>

      <div className="action-buttons">
        <a
          href="https://www.facebook.com/luuhuongtech/"
          target="_blank"
          rel="noopener noreferrer"
          className="action-button facebook-button"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="currentColor"
            style={{ marginRight: "0.4rem" }}
          >
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
          Facebook
        </a>
        <a
          href="https://www.youtube.com/@luuhuongtech"
          target="_blank"
          rel="noopener noreferrer"
          className="action-button youtube-button"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="currentColor"
            style={{ marginRight: "0.4rem" }}
          >
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
          YouTube
        </a>
        <Link href="/demo" className="action-button demo-button">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            style={{ marginRight: "0.4rem" }}
          >
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
          Đặt lịch Demo miễn phí
        </Link>
      </div>

      <h2>
        <strong>Giới thiệu</strong>
      </h2>

      <p>
        Không có nền tảng nào có thể giúp giải mọi bài toán, nhưng chúng ta có
        thể{" "}
        <strong>
          loại bỏ các bước lặp đi lặp lại, đưa người dùng vào trung tâm phát
          triển
        </strong>
        , giúp việc xây dựng phần mềm quản lý chỉ còn <strong>vài ngày</strong>,
        thậm chí <strong>vài giờ</strong>.
      </p>

      <p>
        <strong>GPortal</strong> được sinh ra với mục tiêu giúp doanh nghiệp xây
        dựng phần mềm quản lý{" "}
        <strong>
          nhanh chóng – gọn nhẹ – dễ tích hợp AI – và hầu như không cần viết
          code.
        </strong>
      </p>

      <p>
        GPortal cũng{" "}
        <strong>tích hợp toàn diện với nền tảng tự động hoá N8N</strong>, giúp
        việc xây dựng workflow trở nên đơn giản và mạnh mẽ.
      </p>

      <h3>
        <strong>Như vậy, chúng tôi xác định giá trị mang lại:</strong>
      </h3>

      <ul>
        <li>Xoá bỏ chi phí xây dựng MVP / Prototype.</li>
        <li>Xây dựng – thay đổi nhanh chóng.</li>
        <li>Gọn nhẹ, dễ dàng mở rộng, tích hợp AI.</li>
        <li>Giảm thiểu sự phụ thuộc vào đội ngũ phát triển.</li>
      </ul>

      <hr />

      <h2>
        <strong>No/Low-code – Chúng tôi làm điều đó như thế nào?</strong>
      </h2>

      <p>
        Hầu hết phần mềm quản lý đều xoay quanh việc tạo – sửa – xoá – tìm kiếm
        các <strong>đối tượng quản lý (entity)</strong> khác nhau.
      </p>

      <p>Ví dụ:</p>

      <ul>
        <li>Phần mềm bán hàng: hàng hoá, đơn hàng, khách hàng...</li>
        <li>Phần mềm trường học: sinh viên, lớp học, thời khoá biểu...</li>
      </ul>

      <p>Các đối tượng quản lý này đều có các logic khác nhau.</p>

      <p>Ví dụ:</p>

      <ul>
        <li>
          Khi nhập hoá đơn, bạn chỉ cần nhập loại mặt hàng, đơn giá → phần mềm
          tự tính tổng giá.
        </li>
        <li>
          Sau khi hàng được báo xuất kho → phần mềm phải tự thông báo đến các
          đơn vị liên quan.
        </li>
      </ul>

      <p>
        Vậy, nếu chúng ta <strong>có giao diện đầy đủ để tuỳ chỉnh</strong>{" "}
        (config) các <strong>đối tượng quản lý (entity)</strong>,{" "}
        <strong>
          ta hoàn toàn có thể loại bỏ các bước lập trình, xây dựng database,
          API...
        </strong>
      </p>

      <p>
        Tương ứng, chúng ta sẽ cần{" "}
        <strong>4 bước để có phần mềm quản lý cho riêng bạn</strong>
      </p>

      <ol>
        <li>Tạo đối tượng cần quản lý.</li>
        <li>Thiết lập các thuộc tính, logic cho đối tượng cần quản lý.</li>
        <li>
          Nhập liệu, thêm - xoá - sửa - tìm kiếm cho đối tượng cần quản lý.
        </li>
        <li>
          Sử dụng N8N, với các node dành riêng cho GPortal để xây dựng workflow
          và làm tự động quy trình quản lý
        </li>
      </ol>

      <p>
        📷 <em>Các bước thực hiện trên GPortal:</em>
      </p>

      <Img src="/assets/stepBuild1.png" alt="Step build 1" />

      <p>
        📷 <em>Xây dựng workflow:</em>
      </p>

      <Img src="/assets/stepBuild2.png" alt="Step build 2" />

      <hr />

      <h1>
        <strong>Từ điển</strong>
      </h1>

      <p>Chúng tôi không tạo ra bất kỳ kiến trúc hay design pattern mới.</p>
      <p>
        Điều chúng tôi làm là giúp bạn áp dụng những cấu trúc quen thuộc một
        cách dễ dàng hơn, trực quan hơn.
      </p>

      <table>
        <thead>
          <tr>
            <th>Thuật ngữ</th>
            <th>Giải thích</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>Entity (Đối tượng quản lý)</strong>
            </td>
            <td>
              Là loại dữ liệu bạn muốn quản lý. Ví dụ: sản phẩm, khách hàng,
              nhân viên. Tương tự như một bảng trong database.
            </td>
          </tr>
          <tr>
            <td>
              <strong>Attribute / Field (Thuộc tính)</strong>
            </td>
            <td>
              Thông tin cụ thể của entity. Ví dụ: name, email, birthDay.
              &quot;Field&quot; và &quot;Attribute&quot; có nghĩa giống nhau.
            </td>
          </tr>
          <tr>
            <td>
              <strong>Field Type (Kiểu dữ liệu)</strong>
            </td>
            <td>
              Xác định dạng dữ liệu của thuộc tính: string, number, date, enum,
              reference, embedded document, v.v.
            </td>
          </tr>
          <tr>
            <td>
              <strong>Validation (Kiểm tra hợp lệ)</strong>
            </td>
            <td>
              Hàm kiểm tra dữ liệu trước khi lưu. Trả về true/false. Ví dụ:
              email phải có &quot;@&quot;, số lượng &gt; 0.
            </td>
          </tr>
          <tr>
            <td>
              <strong>Computation (Tính toán tự động)</strong>
            </td>
            <td>
              Hàm tự động sinh ra giá trị dựa trên các thuộc tính khác. Ví dụ:
              tạo mã nhân viên từ name + birthDay.
            </td>
          </tr>
          <tr>
            <td>
              <strong>Workflow (Luồng tự động hoá)</strong>
            </td>
            <td>
              Các hành động tự động xảy ra khi có sự kiện. Ví dụ: kiểm tra tồn
              kho, gửi email, tạo công việc tiếp theo.
            </td>
          </tr>
          <tr>
            <td>
              <strong>Required (Bắt buộc nhập)</strong>
            </td>
            <td>Thuộc tính không được phép bỏ trống khi nhập dữ liệu.</td>
          </tr>
          <tr>
            <td>
              <strong>Function (Hàm)</strong>
            </td>
            <td>
              Đoạn mã JavaScript được sử dụng trong Validation hoặc Computation
              để xử lý logic tuỳ chỉnh.
            </td>
          </tr>
        </tbody>
      </table>

      <hr />

      <h1>
        <strong>
          Entity Configuration – Tạo đối tượng quản lý không cần sửa database
          hay API
        </strong>
      </h1>

      <p>
        Entity Configuration là nơi dùng để tuỳ chỉnh các đối tượng, bao gồm:
      </p>

      <ul>
        <li>Thêm / xoá đối tượng quản lý</li>
        <li>Các thuộc tính (field)</li>
        <li>
          Các logic đi kèm cho các thuộc tính này (computation &amp; validation)
        </li>
        <li>
          Đối tượng có được lưu dưới dạng vector embedding để tìm kiếm bằng AI
          hay không
        </li>
      </ul>

      <p>
        📷 <em>Entity config overview:</em>
      </p>

      <Img
        src="/assets/entityConfigOverview.png"
        alt="Entity config overview"
      />

      <hr />

      <h2>
        <strong>Ví dụ: Tạo entity teamMember</strong>
      </h2>

      <p>
        Giả sử bạn muốn quản lý thông tin thành viên nhóm (teamMember) với 3
        thuộc tính:
      </p>

      <ul>
        <li>name – string</li>
        <li>email – string</li>
        <li>birthDay – date</li>
      </ul>

      <p>
        Bạn chỉ cần mở trang <strong>Config Entity</strong> và khai báo các
        field.
      </p>

      <p>
        📹 <em>Video tạo teamMember:</em>
      </p>

      <Img
        src="/assets/createTeamMemberEntity.gif"
        alt="Create teamMember entity"
      />

      <hr />

      <h2>
        <strong>Sử dụng &amp; quản lý dữ liệu (Manage Entity)</strong>
      </h2>

      <p>Sau khi cấu hình, bạn có thể:</p>

      <ul>
        <li>Hiển thị hoặc ẩn entity</li>
        <li>
          Thực hiện đầy đủ thao tác nhập liệu: thêm – xoá – chỉnh sửa – tìm kiếm
        </li>
      </ul>

      <p>
        📹 <em>Video nhập liệu:</em>
      </p>

      <Img src="/assets/inputValueForEntity.gif" alt="Input value for entity" />

      <hr />

      <h1>
        <strong>Cấu hình thuộc tính (Field Configuration)</strong>
      </h1>

      <p>
        Mỗi đối tượng (entity) đều chứa một tập thuộc tính (field), và với mỗi
        thuộc tính, bạn có thể thiết lập:
      </p>

      <table>
        <thead>
          <tr>
            <th>Thuộc tính</th>
            <th>Giải thích</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>Field name</strong>
            </td>
            <td>Tên thuộc tính, được sử dụng trong hệ thống và API.</td>
          </tr>
          <tr>
            <td>
              <strong>View name</strong>
            </td>
            <td>Tên hiển thị cho người dùng trong giao diện.</td>
          </tr>
          <tr>
            <td>
              <strong>Description</strong>
            </td>
            <td>Mô tả ý nghĩa hoặc mục đích của thuộc tính.</td>
          </tr>
          <tr>
            <td>
              <strong>Field type</strong>
            </td>
            <td>
              Kiểu dữ liệu của thuộc tính (string, number, date, enum,
              reference, v.v.).
            </td>
          </tr>
          <tr>
            <td>
              <strong>Required</strong>
            </td>
            <td>Xác định thuộc tính có bắt buộc nhập hay không.</td>
          </tr>
          <tr>
            <td>
              <strong>Use Validation</strong>
            </td>
            <td>
              Cho biết thuộc tính có sử dụng hàm kiểm tra hợp lệ (validation
              function) hay không.
            </td>
          </tr>
          <tr>
            <td>
              <strong>Read Only</strong>
            </td>
            <td>Thuộc tính chỉ được xem, không thể chỉnh sửa.</td>
          </tr>
          <tr>
            <td>
              <strong>System Field</strong>
            </td>
            <td>
              Thuộc tính đặc biệt của hệ thống, không thể xoá và đôi khi không
              thể sửa.
            </td>
          </tr>
        </tbody>
      </table>

      <p>
        📷 <em>Ảnh giao diện:</em>
      </p>

      <Img src="/assets/attributeConfig.png" alt="Attribute config" />

      <p>
        📹 <strong>Validation</strong> – Hàm được thực thi để xác định giá trị
        có hợp lệ hay không:
      </p>

      <Img src="/assets/customValidation.png" alt="Custom validation" />

      <p>
        📹 <strong>Computation</strong> – Hàm được thực thi để tính toán ra giá
        trị:
      </p>

      <Img src="/assets/customComputation.png" alt="Custom computation" />

      <hr />

      <h1>
        <strong>Kiểu dữ liệu cho thuộc tính (Field Types)</strong>
      </h1>

      <p>
        Mỗi thuộc tính đều có thể tuỳ chỉnh kiểu dữ liệu, đảm bảo tính chặt chẽ
        và tối ưu trong quản lý dữ liệu.
      </p>

      <h2>
        <strong>Kiểu dữ liệu cơ bản</strong>
      </h2>

      <table>
        <thead>
          <tr>
            <th>Kiểu</th>
            <th>Mô tả</th>
            <th>Ví dụ</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>string</td>
            <td>Chuỗi ký tự</td>
            <td>
              <code>&quot;Nguyễn Văn A&quot;</code>,{" "}
              <code>&quot;Active&quot;</code>
            </td>
          </tr>
          <tr>
            <td>number</td>
            <td>Số</td>
            <td>
              <code>25</code>, <code>1200000</code>
            </td>
          </tr>
          <tr>
            <td>date</td>
            <td>Ngày/giờ ISO 8601</td>
            <td>
              <code>&quot;2025-11-23T10:30:00Z&quot;</code>
            </td>
          </tr>
          <tr>
            <td>richText</td>
            <td>Chuỗi ký tự dài, HTML</td>
            <td>dùng cho các đoạn văn bản dài, markdown hoặc HTML</td>
          </tr>
        </tbody>
      </table>

      <p>📹 Field types supported:</p>

      <Img src="/assets/fieldTypeSupported.png" alt="Field types supported" />

      <hr />

      <h2>
        <strong>Kiểu dữ liệu nâng cao</strong>
      </h2>

      <p>Tương tự lập trình, GPortal hỗ trợ các kiểu dữ liệu sau:</p>

      <table>
        <thead>
          <tr>
            <th>Kiểu</th>
            <th>Mô tả</th>
            <th>Ví dụ</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>enum</strong>
            </td>
            <td>Danh sách giá trị cố định</td>
            <td>
              <code>&quot;status&quot;: &quot;Active&quot;</code> với tập giá
              trị{" "}
              <code>
                [&quot;Active&quot;, &quot;Inactive&quot;, &quot;Pending&quot;]
              </code>
            </td>
          </tr>
          <tr>
            <td>
              <strong>reference</strong>
            </td>
            <td>Liên kết đến entity khác</td>
            <td>
              <code>&quot;customerId&quot;: &quot;CUS-00123&quot;</code> trỏ đến
              entity <strong>Customer</strong>
            </td>
          </tr>
          <tr>
            <td>
              <strong>array reference</strong>
            </td>
            <td>Liên kết nhiều entity</td>
            <td>
              <code>
                &quot;tagIds&quot;: [&quot;TAG-1&quot;, &quot;TAG-2&quot;]
              </code>
            </td>
          </tr>
          <tr>
            <td>
              <strong>embedded document</strong>
            </td>
            <td>Object nhiều thuộc tính</td>
            <td>
              <code>
                &quot;address&quot;: {"{"} &quot;street&quot;: &quot;12 Lê
                Lợi&quot;, &quot;city&quot;: &quot;Huế&quot; {"}"}
              </code>
            </td>
          </tr>
          <tr>
            <td>
              <strong>array embedded documents</strong>
            </td>
            <td>Danh sách object</td>
            <td>
              <code>
                &quot;items&quot;: [ {"{"} &quot;name&quot;: &quot;SP A&quot;,
                &quot;qty&quot;: 2 {"}"}, {"{"} &quot;name&quot;: &quot;SP
                B&quot;, &quot;qty&quot;: 1 {"}"} ]
              </code>
            </td>
          </tr>
        </tbody>
      </table>

      <h3>
        <strong>Ví dụ kiểu dữ liệu nâng cao</strong>
      </h3>

      <h4>
        <strong>Enum</strong>
      </h4>

      <p>Dùng để chứa một tập hằng số.</p>
      <p>Enum gồm: key – name – color.</p>

      <p>
        Giả sử cần tạo thuộc tính <strong>role</strong> để xác định vai trò của
        thành viên: junior, senior, leader.
      </p>

      <p>Cách thiết lập:</p>

      <ol>
        <li>
          Field type: chọn <strong>enum</strong>
        </li>
        <li>Nhập key cho enum</li>
        <li>Nhập name và color cho từng giá trị</li>
      </ol>

      <p>📹 Demo:</p>

      <Img src="/assets/demoEnumField.gif" alt="Demo enum field" />

      <hr />

      <h4>
        <strong>Reference</strong>
      </h4>

      <p>Dùng để chứa key trỏ đến một entity khác.</p>

      <p>
        Ví dụ: cần thêm thuộc tính <strong>team</strong> để biết thành viên
        thuộc team nào.
      </p>

      <p>Cách thiết lập:</p>

      <ol>
        <li>Field type: Reference</li>
        <li>
          Entity referenced: chọn entity <strong>team</strong>
        </li>
      </ol>

      <p>📹 Demo:</p>

      <Img src="/assets/demoReference.gif" alt="Demo reference" />

      <hr />

      <h4>
        <strong>Array Reference</strong>
      </h4>

      <p>Dùng để chứa một tập key, trỏ đến nhiều entity khác.</p>

      <p>
        Ví dụ: tạo thuộc tính <strong>projects</strong> để biết thành viên tham
        gia các dự án nào.
      </p>

      <p>Cách thiết lập:</p>

      <ol>
        <li>Field type: Array Reference</li>
        <li>Entity referenced: team (hoặc entity phù hợp)</li>
      </ol>

      <p>📹 Demo:</p>

      <Img src="/assets/demoArrayReference.gif" alt="Demo array reference" />

      <hr />

      <h4>
        <strong>Embedded Document</strong>
      </h4>

      <p>Dùng để lưu object.</p>
      <p>
        Ví dụ: thuộc tính <strong>address</strong> gồm street và city.
      </p>

      <p>Cách thiết lập:</p>

      <ol>
        <li>Field type: Embedded Document</li>
        <li>Entity referenced: Address</li>
      </ol>

      <p>📹 Demo:</p>

      <Img
        src="/assets/demoEmbeddedDocument.gif"
        alt="Demo embedded document"
      />

      <hr />

      <h4>
        <strong>Array Embedded Documents</strong>
      </h4>

      <p>Dùng để lưu danh sách object.</p>

      <p>
        Ví dụ: thuộc tính <strong>workHistory</strong> để lưu quá trình làm
        việc.
      </p>

      <p>Cách thiết lập:</p>

      <ol>
        <li>Field type: Array Embedded Document</li>
        <li>Entity referenced: workHistory</li>
      </ol>

      <p>📹 Demo:</p>

      <p>
        <em>(updating)</em>
      </p>

      <hr />

      <h1>
        <strong>Business Rules – Custom Validation &amp; Computation</strong>
      </h1>

      <p>
        Hệ thống cho phép khai báo hàm kiểm tra và tính toán tự động khi dữ liệu
        thay đổi.
      </p>

      <p>
        <strong>Ví dụ</strong>
      </p>

      <ul>
        <li>Kiểm tra email hợp lệ</li>
        <li>Tạo mã teamMember dựa trên name + birthDay</li>
      </ul>

      <hr />

      <h2>
        <strong>Custom validation</strong>
      </h2>

      <p>Custom validation là hàm chạy mỗi khi dữ liệu thay đổi.</p>
      <p>Hàm phải trả về:</p>

      <ul>
        <li>
          <strong>true</strong> – hợp lệ
        </li>
        <li>
          <strong>false</strong> – không hợp lệ
        </li>
      </ul>

      <p>
        Ví dụ: kiểm tra email có chứa ký tự <strong>@</strong>.
      </p>

      <p>Cách dùng:</p>

      <ol>
        <li>
          Chọn <strong>Use Validation</strong>
        </li>
        <li>Viết hàm validation</li>
        <li>
          Nhập thông báo lỗi tại <strong>Validation Message On Failure</strong>
        </li>
      </ol>

      <p>📹 Demo:</p>

      <Img
        src="/assets/demoCustomValidation.gif"
        alt="Demo Custom validation"
      />

      <hr />

      <h2>
        <strong>Custom Computation</strong>
      </h2>

      <p>
        Computation chạy khi giá trị của các thuộc tính phụ thuộc (dependencies)
        thay đổi.
      </p>

      <p>
        Ví dụ: tạo thuộc tính <strong>code</strong> = name + birthDay.
      </p>

      <p>Cách dùng:</p>

      <ol>
        <li>Field type: Computation</li>
        <li>Viết hàm computation</li>
        <li>Chọn dependencies: name và birthDay</li>
      </ol>

      <p>📹 Demo:</p>

      <Img src="/assets/demoComputation.gif" alt="Demo Custom computation" />

      <hr />

      <h1>
        📦 <strong>Cách chúng tôi lưu trữ entity</strong>
      </h1>

      <p>
        Mỗi entity khi lưu trữ sẽ được bao bọc trong một cấu trúc chuẩn, gồm:
      </p>

      <pre>
        <code>{`{
  "name": "Tên entity, ví dụ: teamMember",
  "version": "Phiên bản schema của entity, mặc định là 0",
  "value": "Object chứa toàn bộ dữ liệu (các thuộc tính) của entity"
}`}</code>
      </pre>

      <h3>🔍 Giải thích nhanh</h3>

      <ul>
        <li>
          <strong>name</strong>: Tên loại entity.
        </li>
        <li>
          <strong>version</strong>: Dùng để quản lý thay đổi schema theo thời
          gian.
        </li>
        <li>
          <strong>value</strong>: Object chứa <strong>dữ liệu thực tế</strong>.
        </li>
      </ul>

      <hr />

      <h3>📘 Ví dụ</h3>

      <p>
        Giả sử entity <strong>teamMember</strong> có dữ liệu:
      </p>

      <pre>
        <code>{`name: "Nguyen Van A"
email: "nguyenVanA@gmail.com"
role: "leader"`}</code>
      </pre>

      <p>Thì khi lưu trữ, hệ thống sẽ ghi:</p>

      <pre>
        <code>{`{
  "name": "teamMember",
  "version": 0,
  "value": {
    "name": "Nguyen Van A",
    "email": "nguyenVanA@gmail.com",
    "role": "leader"
  }
}`}</code>
      </pre>

      <hr />

      <h1>
        <strong>Workflow – Tự động hoá công việc</strong>
      </h1>

      <p>Phần mềm quản lý hiện đại không chỉ CRUD.</p>
      <p>
        Quan trọng hơn là <strong>tự động hoá vận hành</strong>.
      </p>

      <h3>Các nhu cầu phổ biến:</h3>

      <ul>
        <li>Tự động kiểm tra dữ liệu</li>
        <li>Gửi thông báo/email</li>
        <li>Tạo công việc kế tiếp</li>
        <li>Đồng bộ dữ liệu giữa phòng ban</li>
        <li>Tự động hoá luồng phê duyệt</li>
      </ul>

      <hr />

      <h2>
        <strong>Ví dụ thực tế về quy trình</strong>
      </h2>

      <h3>
        <strong>Doanh nghiệp bán hàng</strong>
      </h3>

      <ul>
        <li>Kiểm tra tồn kho</li>
        <li>Đủ hàng → tạo hoá đơn</li>
        <li>Thiếu hàng → tạo phiếu nhập</li>
        <li>Hoàn tất → gửi email cảm ơn</li>
      </ul>

      <h3>
        <strong>Doanh nghiệp dịch vụ</strong>
      </h3>

      <ul>
        <li>Khách đặt lịch</li>
        <li>Kiểm tra lịch rảnh</li>
        <li>Tự động gán nhân sự</li>
        <li>Nhắc lịch 24h trước buổi hẹn</li>
      </ul>

      <h3>
        <strong>Công ty đào tạo</strong>
      </h3>

      <ul>
        <li>Học viên đăng ký</li>
        <li>Gửi hợp đồng</li>
        <li>Thanh toán → gửi tài liệu</li>
        <li>Trước khai giảng → nhắc lịch</li>
        <li>Kết thúc → gửi khảo sát</li>
      </ul>

      <hr />

      <h2>
        <strong>Bộ node N8N dành cho GPortal</strong>
      </h2>

      <p>
        Chúng tôi cung cấp đầy đủ node N8N để tương tác với dữ liệu GPortal.
      </p>

      <h3>
        <strong>Bộ API Node</strong>
      </h3>

      <p>Hỗ trợ đầy đủ CRUD, gọi API để thao tác entity.</p>

      <Img src="/assets/n8nAPINodes.jpg" alt="N8N API Nodes" />

      <hr />

      <h4>
        <strong>Create a new entity Node</strong>
      </h4>

      <p>
        Được sử dụng để tạo đối tượng quản lý (entity), có thể sử dụng như tool
        Agent.
      </p>

      <p>
        📄 <strong>Bảng dữ liệu mô tả đối số</strong>
      </p>

      <table>
        <thead>
          <tr>
            <th>Đối số</th>
            <th>Kiểu dữ liệu</th>
            <th>Mô tả</th>
            <th>Hỗ trợ expression</th>
            <th>Ví dụ</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>entityName</strong>
            </td>
            <td>
              <code>string</code>
            </td>
            <td>
              Tên đối tượng (entity) dùng để xác định loại dữ liệu cần truy vấn.
              Cho phép sử dụng biểu thức để lọc linh hoạt.
            </td>
            <td>✔️</td>
            <td>
              <code>&quot;Product*&quot;</code>,{" "}
              <code>&quot;FAQ Guide&quot;</code>,{" "}
              <code>&quot;/^User/&quot;</code>
            </td>
          </tr>
          <tr>
            <td>
              <strong>entityData</strong>
            </td>
            <td>
              <code>object</code>
            </td>
            <td>
              Dữ liệu đối tượng được tạo hoặc dữ liệu dùng để lọc. Chấp nhận các
              biểu thức để so khớp theo thuộc tính.
            </td>
            <td>✔️</td>
            <td>
              <code>
                {"{"} &quot;status&quot;: {"{"} &quot;$eq&quot;:
                &quot;active&quot; {"}"} {"}"}
              </code>
              ,{" "}
              <code>
                {"{"} &quot;category&quot;: &quot;support&quot; {"}"}
              </code>
              ,{" "}
              <code>
                {"{"} &quot;price&quot;: {"{"} &quot;$gte&quot;: 1000 {"}"}{" "}
                {"}"}
              </code>
            </td>
          </tr>
        </tbody>
      </table>

      <p>
        📘 <strong>Request payload tương ứng</strong>
      </p>

      <pre>
        <code>{`{
  "entityName": "Support*",
  "entityData": {
    "category": { "$eq": "guide" },
    "status": { "$in": ["active", "published"] }
  }
}`}</code>
      </pre>

      <p>demo:</p>
      <Img src="/assets/demoCreateNode.gif" alt="N8N Create Node" />

      <hr />

      <h4>
        <strong>Update an entity</strong>
      </h4>

      <p>
        Được sử dụng để chỉnh sửa đối tượng quản lý (entity), có thể sử dụng như
        tool Agent.
      </p>

      <p>
        📄 <strong>Bảng mô tả đối số</strong>
      </p>

      <table>
        <thead>
          <tr>
            <th>Đối số</th>
            <th>Kiểu dữ liệu</th>
            <th>Mô tả</th>
            <th>Hỗ trợ expression</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>entityId</strong>
            </td>
            <td>string / number / object</td>
            <td>
              ID của đối tượng cần cập nhật. Có thể dùng expression để chọn
              nhiều ID hoặc chọn theo điều kiện.
            </td>
            <td>✔️</td>
          </tr>
          <tr>
            <td>
              <strong>entityData</strong>
            </td>
            <td>object</td>
            <td>Dữ liệu cần update vào đối tượng.</td>
            <td>❌</td>
          </tr>
        </tbody>
      </table>

      <p>
        📘 <strong>Request payload tương ứng</strong>
      </p>

      <pre>
        <code>{`{
  "entityId": { "$in": ["101", "102", "103"] },
  "entityData": {
    "status": "active",
    "updatedAt": "2025-01-10T10:00:00Z"
  }
}`}</code>
      </pre>

      <p>demo</p>
      <Img src="/assets/demoUpdateNode.gif" alt="N8N Update Node" />

      <hr />

      <h4>
        <strong>Delete an entity</strong>
      </h4>

      <p>
        Được sử dụng để xoá đối tượng quản lý (entity), có thể sử dụng như tool
        Agent.
      </p>

      <p>
        📄 <strong>Bảng mô tả đối số</strong>
      </p>

      <table>
        <thead>
          <tr>
            <th>Đối số</th>
            <th>Kiểu dữ liệu</th>
            <th>Mô tả</th>
            <th>Hỗ trợ expression</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>entityId</strong>
            </td>
            <td>string / number / object</td>
            <td>
              ID của đối tượng cần xoá. Có thể dùng expression để xoá nhiều ID
              hoặc xoá theo điều kiện.
            </td>
            <td>✔️</td>
          </tr>
        </tbody>
      </table>

      <p>
        📘 <strong>Request payload tương ứng</strong>
      </p>

      <pre>
        <code>{`{
  "entityId": { "$in": ["A01", "A02", "A03"] }
}`}</code>
      </pre>

      <p>demo</p>
      <Img src="/assets/demoDeleteNode.gif" alt="N8N Delete Node" />

      <hr />

      <h4>
        <strong>Get many entities</strong>
      </h4>

      <p>
        Được sử dụng để tìm kiếm thông tin nhiều đối tượng quản lý, có thể sử
        dụng như API tool.
      </p>

      <p>
        📄 <strong>Bảng mô tả đối số Search API</strong>
      </p>

      <table>
        <thead>
          <tr>
            <th>Đối số</th>
            <th>Kiểu dữ liệu</th>
            <th>Mô tả</th>
            <th>Hỗ trợ expression</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>searchParameters</strong>
            </td>
            <td>object</td>
            <td>
              Điều kiện tìm kiếm theo dạng MongoDB query object (so sánh, regex,
              in, range…).
            </td>
            <td>✔️</td>
          </tr>
          <tr>
            <td>
              <strong>limit</strong>
            </td>
            <td>number</td>
            <td>Số lượng dữ liệu cần trả về.</td>
            <td>❌</td>
          </tr>
          <tr>
            <td>
              <strong>entityName</strong>
            </td>
            <td>string</td>
            <td>Tên đối tượng (entity) cần tìm kiếm.</td>
            <td>✔️</td>
          </tr>
        </tbody>
      </table>

      <p>
        📘 <strong>Request Payload tương ứng</strong>
      </p>

      <pre>
        <code>{`{
  "searchParameters": {
    "status": { "$eq": "active" },
    "category": { "$in": ["guide", "support"] }
  },
  "limit": 10,
  "entityName": "SupportArticle"
}`}</code>
      </pre>

      <p>demo</p>
      <Img
        src="/assets/demoGetManyEntities.gif"
        alt="N8N Get Many Entities Node"
      />

      <hr />

      <h2>
        <strong>Bộ điều khiển UI Nodes</strong>
      </h2>

      <p>Nhận tín hiệu điều khiển UI từ workflow.</p>

      <Img src="/assets/controlUINodes.png" alt="Control UI Nodes" />

      <p>Demo:</p>

      <div className="youtube-link">
        <a
          href="https://www.youtube.com/watch?v=dh0_yUKtaxc&list=PLnIW6dBaVHcANhNr3dCQkghdEIBSi8aNK&index=5"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Img
            src="https://img.youtube.com/vi/dh0_yUKtaxc/maxresdefault.jpg"
            alt="Control UI Nodes Video"
          />
        </a>
      </div>

      <hr />

      <h4>
        <strong>Query Embedding Vector Node</strong>
      </h4>

      <p>Truy vấn vector embedding phục vụ AI chatbot và semantic search.</p>

      <p>
        Mỗi đối tượng, khi được tạo với lựa chọn sử dụng vector embedding, sẽ
        được lưu cùng với vector embedding và hỗ trợ việc{" "}
        <strong>semantic search</strong> (tìm kiếm theo ngữ nghĩa).
      </p>

      <table>
        <thead>
          <tr>
            <th>Tham số</th>
            <th>Kiểu dữ liệu</th>
            <th>Bắt buộc</th>
            <th>Mô tả chức năng</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>queryString</strong>
            </td>
            <td>
              <code>string</code>
            </td>
            <td>✔️</td>
            <td>
              Chuỗi văn bản cần chuyển thành vector embedding để thực hiện tìm
              kiếm theo ngữ nghĩa.
            </td>
          </tr>
          <tr>
            <td>
              <strong>limit</strong>
            </td>
            <td>
              <code>number</code>
            </td>
            <td>✔️</td>
            <td>
              Số lượng kết quả tối đa cần trả về sau khi xếp hạng độ tương đồng
              vector.
            </td>
          </tr>
          <tr>
            <td>
              <strong>numCandidates</strong>
            </td>
            <td>
              <code>number</code>
            </td>
            <td>❌</td>
            <td>
              Số lượng ứng viên ban đầu để hệ thống mở rộng phạm vi tìm kiếm
              (dùng cho ANN search).
            </td>
          </tr>
          <tr>
            <td>
              <strong>entityName</strong>
            </td>
            <td>
              <code>string</code>
            </td>
            <td>❌</td>
            <td>Tên loại đối tượng (entity) để lọc trong kho dữ liệu.</td>
          </tr>
        </tbody>
      </table>

      <Img
        src="/assets/queryVectorEmbedding.png"
        alt="Query Vector Embedding"
      />

      <p>Demo:</p>

      <Img
        src="/assets/demoVectorDatabase.gif"
        alt="Demo Query Vector Embedding"
      />
    </div>
  );
}
