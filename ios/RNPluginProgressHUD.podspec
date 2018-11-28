
Pod::Spec.new do |s|
  s.name         = "RNPluginProgressHUD"
  s.version      = "1.0.0"
  s.summary      = "Blankapp - ProgressHUD plugin"
  s.description  = <<-DESC
  A cross-platform ProgressHUD plugin for your React Native app.
                   DESC
  s.homepage       = "https://github.com/blankapp/plugin-progresshud"
  s.license      = "MIT"
  s.license      = { :type => "MIT", :file => "../LICENSE" }
  s.author             = { "author" => "lijy91@foxmail.com" }
  s.platform     = :ios, "7.0"
  s.source       = { :git => "https://github.com/blankapp/plugin-progresshud.git", :tag => "master" }
  s.source_files  = "**/*.{h,m}"
  s.requires_arc = true

  s.dependency "React"
  s.dependency "SVProgressHUD"

end

