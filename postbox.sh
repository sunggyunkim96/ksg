#!/binbash

# 1. 패키지 목록 업데이트 및 Nginx 설치 (웹 서버)
sudo apt-get update
sudo apt-get install -y nginx git

# 2. GitHub에서 웹페이지 소스 코드 복제 (clone)
# <your-github-username>과 <your-repository-name>을 실제 정보로 변경하세요.
# public 저장소 기준 예시입니다. private 저장소는 인증 토큰이 필요합니다.
sudo git clone https://github.com/sunggyunkim96/ksg.git /var/www/my-website

# 3. Nginx 설정 파일 수정 (옵션: 기본 경로 변경 시)
# 예: Nginx가 /var/www/my-website를 보도록 설정 변경 (필요시)
# sudo nano /etc/nginx/sites-available/default

# 4. Nginx 재시작하여 변경 사항 적용
sudo systemctl restart nginx