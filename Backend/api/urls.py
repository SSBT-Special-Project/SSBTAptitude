from django.urls import path
from . import views

# I am nilesh 
urlpatterns = [
    
    path('accounts/login', views.Users.login),
    path('accounts/login2', views.UserLoginView.as_view()),
    path('accounts/register', views.Users.register),
    path('accounts/register2', views.RegisterAPIView.as_view()),
    path('accounts/logout', views.Users.logout),
    path('accounts/logout2', views.logout_view),
    path('accounts/forgot_password', views.Users.forgot_password),
    path('accounts/forgot_password2', views.ForgotPasswordView.as_view()),
    path('accounts/reset_password', views.Users.reset_password),
    path('accounts/verify', views.Users.verify),
    path('dashboard', views.Dashboard.dashboard),
    path('dashboard2', views.DashboardAPIView.as_view()),
    path('test', views.Dashboard.test),
    path('test2', views.TestAPIView.as_view()),
    path('exam_list', views.Dashboard.exam_list),
    path('exam_list2', views.ExamListView.as_view()),
    path('settings', views.Dashboard.settings), 
    path('settings2', views.SettingsAPIView.as_view()),

    path('examine', views.Examine.examine),
    path('examine2', views.ExamineView.as_view()),
    path('examine/test', views.Examine.test),
    path('examine2/test2', views.TestView.as_view()),
    path('examine/add_test', views.Examine.add_test),
    path('examine/add_test2', views.AddTestView.as_view()),
    path('examine/edit_test', views.Examine.edit_test),
    path('examine2/edit_test2', views.EditTestView.as_view()),
    path('examine/uploaded_test_list', views.Examine.uploaded_test_list),
    path('examine2/uploaded_test_list2', views.UploadedTestListView.as_view()),
    path('examine/add_question', views.Examine.add_question),
    path('examine/add_question2', views.AddQuestionView.as_view()),
    path('examine/question', views.Examine.question),
    path('examine2/question2', views.QuestionView.as_view()),
    path('examine/edit_question', views.Examine.edit_question),
    path('examine/edit_question2', views.EditQuestionView.as_view()),
    path('examine2/result_list', views.Examine.result_list),
    path('examine/result_list2', views.ResultListView.as_view()),

    path('exam', views.Exam.exam),
    path('start_exam', views.Exam.start_exam),
    path('start_exam2', views.StartExamAPIView.as_view()),
    path('exam/time', views.Exam.time),
    path('exam/answered', views.Exam.answered),
    path('exam/end', views.Exam.end_exam),
    path('result', views.Exam.result),
    path('result2', views.ResultView.as_view()),
]
