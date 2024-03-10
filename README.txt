# npm init -y: Khởi tạo file package.json
# typescript: giúp chuyển đổi ngôn ngữ typescript -> javascript
- Vì trình duyệt chỉ hiểu javascript
# npx tsc --init: Để tạo ra file config cho typescript
# npx tsc src/index.ts: chuyển đổi từ ngôn ngữ typescript về javascript.
# npx tsc src/index.ts -w: theo dõi tự động chuyển đổi code ts -> js
# Cách tạo folder bundler riêng: chỉ cần gõ lệnh "npx tsc" là tự động build ra ở thư mục dist
- "outDir": "./dist", 
- "rootDir": "./src",
# Trình duyệt không hiểu ngôn ngữ typescript
-> phải có 1 bước trung gian để chuyển đổi từ ts sang js để trình duyêt j có thể hiểu được