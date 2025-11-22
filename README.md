# **GPortal – Generic Portal**

## **Giới thiệu**

Liệu có cách nào để xây dựng mọi phần mềm quảng lý không? Không, nhưng ta có thể **loại bỏ các bước được lặp đi lặp lại**, và làm việc xây dựng phần mềm quản lý còn **vài ngày** thậm chí **vài giờ**

**GPortal** được sinh ra với mục tiêu giúp doanh nghiệp xây dựng phần mềm quản lý **nhanh chóng – gọn nhẹ – chi phí tối ưu – dễ tích hợp AI**.

GPortal cũng **tích hợp toàn diện với nền tảng tự động hoá N8N**, giúp việc xây dựng workflow trở nên đơn giản và mạnh mẽ.

# **No-code/Low-code – Chúng tôi làm điều đó như thế nào?**

Hầu hết phần mềm quản lý đều xoay quanh việc tạo – sửa – xoá – tìm kiếm các **đối tượng quản lý (entity)** khác nhau.

Ví dụ:

- Phần mềm bán hàng là hàng hoá & đơn hàng, khách hàng...
- Phần mềm trường học là sinh viên, lớp học, thời khoá biểu...

Các đối tượng quản lý này, đều có các logic khác nhau.

Ví dụ:

- Khi nhập hoá đơn, bản chỉ cần nhập loại mặt hàng, đơn giá -> phần mềm phải tự đưa ra tổng giá.
- Sau khi hàng được báo xuất kho -> phần mềm phải tự thông báo đến các đơn vị liên quan.

Vạy, nếu chung ta **có giao diện đầy đủ để tuỳ chỉnh** (config) các **đối tượng quản lý (entity)** **ta hoàng toàn có thể loại bỏ các bước lập trình, xây dựng database, API...**

---

# **Entity Configuration – Tạo đối tượng quản lý không cần sửa database hay API**

Entity Configuration là nơi ta dùng để tuỳ chỉnh các đối tượng quy bao gồm:

- Các thuộc tính (field)
- Các logic đi kèm cho các thuộc tính này (computation & validation)
- Các đối tượng này có được lưu dưới dạng vector embedding để được tìm kiếm với AI không

📷 _Entity config overview:_

![Entity config overview](assets/entityConfigOverview.png)

---

## **Ví dụ: Tạo entity teamMember**

Giả sử bạn muốn quản lý thông tin thành viên nhóm (teamMember) với 3 thuộc tính:

- name - string
- email - string
- birthDay - date

Bạn chỉ cần mở trang **Config Entity** và khai báo các field.

📹 _Video tạo teamMember:_

![Create teamMember entity](assets/createTeamMemberEntity.gif)

---

## **Sử dụng & quản lý dữ liệu (Manage Entity)**

Sau khi cấu hình, bạn có thể:

- cho hiển thị hoặc ẩn entity
- thực hiện đầy đủ thao tác nhập liệu: thêm – xoá – chỉnh sửa – tìm kiếm

📹 _Video nhập liệu:_

![Input value for entity](assets/inputValueForEntity.gif)

---

# **Cấu hình thuộc tính (Field Configuration)**

Mỗi đối tượng (entity) đều hàm chứa một tập các thuộc tính (field) và ứng với mỗi thuộc tính bạn có thể thiết lập:

- Field name - Tên thuộc tính
- View name - Tên được hiển thị thuộc tính
- Description - Mô tả thuộc tính
- Field type - Loại dữ liệu cho thuộc tính
- Required - Thuộc tính có bắt buộc nhập dữ liệu không
- Validation - Thuộc tính có sữ dụng hàm để kiểm tra tính hợp lệ khi nhập liệu không

📷 _Ảnh giao diện:_

![Attribute config](assets/attributeConfig.png)

📹 Validation - Các hàm (function) sẽ được thực thi để xác định giá trị nhập liệu có hợp lệ không:

![Custom validation](assets/customValidation.png)

📹 Computation - các hàm (function) sẽ được thực thi để tính toán ra giá trị cho dữ liệu:

![Custom computation](assets/customComputation.png)

---

## **Kiểu dữ liệu Cho thuộc tính (Field Types)**

Mỗi thuộc tính đều thể tuỳ chỉnh kiểu dữ liệu khác nhau, đảm bảo tính chặc chẽ, tối ưu trong quản lý dữ liệu

## **Kiểu dữ liệu cơ bản**

| Kiểu   | Mô tả             |
| ------ | ----------------- |
| string | Chuỗi ký tự       |
| number | Số                |
| date   | Ngày/giờ ISO 8601 |

📹 _Video mô tả:_

![Field types supported](assets/fieldTypeSupported.png)

---

## **Kiểu dữ liệu nâng cao**

Tương tự như lập trình, chúng tôi hỗ trợ các kiểu dữ liệu sau:
| Kiểu nâng cao | Mô tả |
| ------------------------ | --------------------------- |
| enum | Danh sách giá trị cố định |
| reference | Liên kết đến entity khác |
| array reference | Liên kết nhiều entity |
| embedded document | Một object nhiều thuộc tính |
| array embedded documents | Danh sách object |

---

# **Ví dụ kiểu dữ liệu nâng cao**

## **Enum**

Được dùng để chưa một tập hằng số.
Enum gồm: key – name – color.
Giả sử ta muốn tạo thêm một thuộc tính tên role (vai trò) để quản lý thành viên trong team, mỗi thành viên có thể có một trong ba vai trò là junior, senior, leader

Để thiết lập kiểu enum ta làm như sau:

1. Field type: chọn enum
2. nhập liệu key cho enum
3. nhập liệu name và color (màu) sẽ được với field enum.

📹 Demo:

![Demo enum field](assets/demoEnumField.gif)

---

## **Reference**

Dùng để chứa key, trỏ đến đối tượng (entity) khác.
Giả sử chúng ta cần thêm một thuộc tính nữa là team, thuộc tính này sẽ cho chúng ta biết team member sẽ thuộc team nào
Để thiết lập Reference ta làm như sau:

1. Field type: chọn Reference
2. Entity referenced: Chọn đối tượng quản lý được tham chiếu, ở đây tôi chọn team

📹 Demo

![Demo reference](assets/demoReference.gif)

---

## **Array Reference**

Dùng để chưa một tập các key, dùng để trỏ đến nhiều đối tượng (entity khác nhau).
Giả sử chúng ta tạo thêm một thuộc tính tên projects (dự án), thuộc tính này sẽ quyết định team sẽ thuộc về các dự án nào.

Để thiết lập Array reference ta làm như sau:

1. Field type: chọn Array Reference
2. Entity referenced: Chọn đối tượng quản lý được tham chiếu, ở đây tôi chọn đối tượng là team

📹 Demo:

![Demo array reference](assets/demoArrayReference.gif)

---

## **Embedded Document**

Dùng để lưu kiểu dữ liệu object, giả sử chúng ta muốn tạo thêm một thuộc tính tên address để lưu địa chỉ của thành viên. Địa chỉ của thành viên gồm 2 thuộc tính con là street (đường), thành phố (city).

Để thiết lập kiểu Embedded Document ta làm như sau:

1. Field type: chọn Embedded document
2. Entity Referenced: kiểu đổi tượng được lưu trữ ở đây tôi chọn đối tượng là Address

📹 Demo video:

![Demo embedded document](assets/demoEmbeddedDocument.gif)

---

## **Array Embedded Documents**

Dùng để lưu một mảng các object, giải sử ứng với mỗi thành viên team, ta muốn lưu một tập dữ liệu về quá trình làm việc của thành viên đó. Ta sẽ tạo thuộc tính mới tên workHistory.

Để thiết lập kiểu Embedded Document ta làm như sau:

1. Field type: chọn Array Embedded document
2. Entity Referenced: kiểu đổi tượng được lưu trữ ở đây tôi chọn đối tượng là workHistory
   📹 Demo (to be updated):

<!-- ![Embedded array example](assets/demoArrayEmbeddedDocument.gif) -->

---

# **Business Rules – Custom Validation & Computation**

Hệ thống cho phép khai báo hàm để kiểm tra và tính toán tự động khi dữ liệu thay đổi.

### **Ví dụ**

- Kiểm tra email hợp lệ
- Tạo mã teamMember dựa trên name + birthDay

## **Custom validation**

Custom validation là các hàm sẽ được thực thi khi dữ liệu của đối tượng thay đổi.
Hàm phải luôn trả các giá trị:

- True - dữ liệu hợp lệ
- False - dữ liệu không hợp lệ

Ví dụ khi ta muốn kiểm tra email có hợp lệ hay không ta sẽ viết một hàm để kiểm tra xem chuỗi email chứa kí tự @ hay không.

Để sử dụng validation:

1. Chọn Use Computation
2. Khai báo hàm sẽ thực thi cho computation.
3. "Validation Message On Failure" nhập thông báo khi dữ liệu không hợp lệ.

📹 Demo:
![Demo Custom validation](assets/demoCustomValidation.gif)

## **Custom Computation**

Custom computation là các hàm sẽ được thực thi khi giá trị của các thuộc tính phụ thuộc (dependencies).
Custom computation chỉ có thể được sử dụng khi thuộc tính (field) là có kiểu dữ liệu (field type) là computation.
Giá trị trả về của hàm computation sẽ là giá trị của thuộc tính đó.

Ví dụ, ta sẽ tạo thêm một thuộc tính mới tên là code (mã thành viên), thuộc tính này sẽ có giá trị tự sinh ra từ việc kết nối chuỗi dữ liệu birthDay và name.

Để sử dụng computation ta làm như sau:

1. Field type: chọn kiểu computation
2. Chọn tab computation và viết hàm computation
3. Dependencies: chọn các thuộc tính sẽ làm hàm computation chạy khi giá trị thay đổi, ở đây tôi chọn name và birthDay

📹 Demo:

![Demo Custom computation](assets/demoComputation.gif)

---

# **Workflow – Tự động hoá công việc**

Phần mềm quản lý hiện đại không chỉ CRUD.
Điều quan trọng hơn là **tự động hoá quy trình vận hành**.

### Các nhu cầu phổ biến:

- Tự động kiểm tra dữ liệu
- Tự động gửi thông báo/email
- Tự động tạo công việc kế tiếp
- Tự động đồng bộ dữ liệu giữa phòng ban
- Tự động hoá luồng phê duyệt

---

## **Ví dụ thực tế về quy trình**

### **Doanh nghiệp bán hàng**

- Kiểm tra tồn kho
- Đủ hàng → tạo hoá đơn
- Thiếu hàng → tạo phiếu nhập kho
- Hoàn tất → gửi email cảm ơn

### **Doanh nghiệp dịch vụ**

- Khách đặt lịch
- Kiểm tra lịch rảnh
- Tự động gán nhân sự
- Nhắc lịch 24h trước buổi hẹn

### **Công ty đào tạo**

- Học viên đăng ký
- Tự động gửi hợp đồng
- Thanh toán → gửi tài liệu
- Trước khai giảng → nhắc lịch
- Kết thúc → gửi khảo sát

---

# **Bộ node N8N dành cho GPortal**

Chúng tôi cung cấp đầy đủ node N8N để tương tác với dữ liệu GPortal.

## **Bộ API Node**

Hỗ trợ đầy đủ CRUD, gọi API để thao tác entity.

📷

![N8N API Nodes](assets/n8nAPINodes.jpg)

---

## **Bộ điều khiển UI Node**

Nhận tín hiệu điều khiển UI từ workflow.

📷

![Control UI Nodes](assets/controlUINodes.png)

---

## **Query Embedding Vector Node**

Truy vấn vector embedding phục vụ AI chatbot và semantic search.

📷

![Query Vector Embedding](assets/queryVectorEmbedding.png)
